# tomoshibiの環境作り方

コードの部分は`>>>`の後ろは入力する必要はありません。
想定される出力です。

1. dockerをインストール

[Docker Store](https://store.docker.com/editions/community/docker-ce-desktop-mac)

```
docker --version
>>> Docker version 18.06.0-ce, build 0ffa825

docker-compose --version
>>> docker-compose version 1.22.0, build f46880f
```

2. gitをインストール

ググってやって見てください。分からなければ教えます。
macの場合`brew`があると楽です。
[macOS 用パッケージマネージャー — macOS 用パッケージマネージャー](https://brew.sh/index_ja)

```
brew --version
>>> Homebrew 1.7.0
>>> Homebrew/homebrew-core (git revision b47f6e; last commit 2018-07-19)
```

`brew`がある場合、

```
brew install git
```
で大丈夫なはず。

```
git --version
>>> version 2.14.2
```

3. git clone

tomoshibiのコードを自分のパソコンにダウンロードします
各々作業ディレクトリ(`~/workspace/`など)があればそこに移動してから以下のコマンドを実行して下さい。tomoshibiというディレクトリができます。

bitbucketで管理してるのでアカウントある人は共有します。

```
git clone https://{{自分のbitbucketのユーザーネーム}}@bitbucket.org/tomoshibi/tomoshibi.git
ls tomoshibi
```
`ls tomoshibi`していろいろ出てくればおkです。

4. docker立ち上げ

初回はかなり時間がかかると思います。

```
cd tomoshibi
docker-compose up --build
```

5. コンテナ上でその他必要なクエリを流す(初回のみ)

* コンテナ内に入ってdjangoのシェルを開く

```
docker exec -it {{tomoshibi-appのcontainer id}} bash`
python manage.py shell`
```

* 以下のコードをコピペ

dockerで対応するのが面倒な感じだったのでとりあえずの暫定処理。
いつかdockerからできるようにしたいです（切実）

``` python
from tomoshibiapp.models import Category
categories = [
    Category(name='ビジネス・スタートアップ'),
    Category(name='ソーシャルグッド'),
    Category(name='国際協力'),
    Category(name='地域活性'),
    Category(name='教育'),
    Category(name='飲食店・フード'),
    Category(name='プロダクト・テクノロジー'),
    Category(name='アート・クリエイティブ'),
    Category(name='趣味'),
    Category(name='その他'),
]
Category.objects.bulk_create(categories)

from binaryapp.models import BinaryFile
b = BinaryFile(title='default user icon', url='/static/img/default-icon.png')
b.save()
from django.contrib.sites.models import Site
from allauth.socialaccount.models import SocialApp
s = Site.objects.get(id=1)
# facebook追加
f, create = SocialApp.objects.get_or_create(name="facebook", provider="facebook")
if create:
    f.client_id = "{{ facebookのkey }}"
    f.secret = "{{ facebookのsecretkey }}"
    f.save()
    f.sites.add(s)
# twitter追加
t, create = SocialApp.objects.get_or_create(name='twitter', provider='twitter')
if create:
    t.client_id='{{ twitterのkey }}'
    t.secret = '{{ twitterのsecretkey }}'
    t.save()
    f.sites.add(s)
```


お疲れ様でした！！
