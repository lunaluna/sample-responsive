# Responsiveレイアウトの初歩

## Flexbox

### Frexboxの約束事
- flexboxは「親(コンテナ)」と「子(アイテム)」で構成される
- コンテナのdisplayプロパティに「flex（または inline-flex）」を指定する

### Frexboxってもう使えるの？
- [CanIUse flexbox](http://caniuse.com/#feat=flexbox)
- IE11は一部プロパティが効かない
- Androidは4.4から（それ以前は一部プロパティが効かない）
- iOSは9以降（iOS7、8はプレフィックスで対応）
- [flexboxのバグに立ち向かう（flexboxバグまとめ）](http://qiita.com/hashrock/items/189db03021b0f565ae27)

### コンテナに指定できるプロパティ
#### コンテナにはアイテムをどうレイアウトするかを設定
- display
  - コンテナに**必ず**指定する
  - 指定すると子要素はアイテムと見なされる
- flex-wrap
  - アイテムを1行に収めるか複数行に折り返すか
    <dl>
      <dt>nowrap</dt>
      <dd>折り返さない（デフォルト）</dd>
    </dl>
    <dl>
      <dt>wrap</dt>
      <dd>下へ折り返す</dd>
    </dl>
    <dl>
      <dt>wrap-reverse</dt>
      <dd>上へ折り返す</dd>
    </dl>
- flex-direction
  - アイテムをどの方向に並べるか
  - 水平・垂直
  - flex-directionによって見た目上の水平・垂直方向が異なる
    <dl>
      <dt>row</dt>
      <dd>左から右（デフォルト）</dd>
    </dl>
    <dl>
      <dt>row-reverse</dt>
      <dd>右から左</dd>
    </dl>
    <dl>
      <dt>column</dt>
      <dd>上から下</dd>
    </dl>
    <dl>
      <dt>column-reverse</dt>
      <dd>下から上</dd>
    </dl>
- flex-flow
  - flex-directionとflex-wrapをショートハンド（まとめて）で記述
- justify-content
  - directionに沿ったアイテムの水平の揃え方
  - 「Flexアイテム同士」の余白を調整する
    <dl>
      <dt>flex-start</dt>
      <dd>左揃え（デフォルト）</dd>
    </dl>
    <dl>
      <dt>flex-end</dt>
      <dd>右揃え</dd>
    </dl>
    <dl>
      <dt>center</dt>
      <dd>中央揃え</dd>
    </dl>
    <dl>
      <dt>space-between</dt>
      <dd>均等配置</dd>
    </dl>
    <dl>
      <dt>space-around</dt>
      <dd>均等配置（先端・終端にも余白）</dd>
    </dl>
- align-items
  - directionに沿ったアイテムの垂直の揃え方
  - Flexアイテムを「垂直方向で揃える」
    <dl>
      <dt>flex-start</dt>
      <dd>横配置は上揃え、縦配置は左揃え（デフォルト）</dd>
    </dl>
    <dl>
      <dt>flex-end</dt>
      <dd>横配置は下揃え、縦配置は右揃え</dd>
    </dl>
    <dl>
      <dt>center</dt>
      <dd>中央揃え</dd>
    </dl>
    <dl>
      <dt>baseline</dt>
      <dd>ベースライン揃え</dd>
    </dl>
    <dl>
      <dt>stretch</dt>
      <dd>要素全体を等幅で揃える</dd>
    </dl>
- align-content
  - アイテムの行ごとの揃え方
  - 複数行あり、親との間に隙間がある場合に有効
  - 行が「列」であっても同様
    <dl>
      <dt>flex-start</dt>
      <dd>横配置は上揃え、縦配置は左揃え（デフォルト）</dd>
    </dl>
    <dl>
      <dt>flex-end</dt>
      <dd>横配置は下揃え、縦配置は右揃え</dd>
    </dl>
    <dl>
      <dt>center</dt>
      <dd>中央揃え</dd>
    </dl>
    <dl>
      <dt>space-between</dt>
      <dd>均等配置</dd>
    </dl>
    <dl>
      <dt>space-around</dt>
      <dd>均等配置（先端・終端にも余白）</dd>
    </dl>
    <dl>
      <dt>stretch</dt>
      <dd>要素全体を等幅で揃える</dd>
    </dl>

### アイテムに指定できるプロパティ
#### アイテムをどのように表示させるか個別に設定
- 他のアイテムより幅を拡大・縮小する、コンテナの整列ルールを上書きするなど
- order
  - アイテムの順番を指定する
  - 1から始まる順番の数値を指定
  - このプロパティを指定するときは、順序を変更するFlexアイテムの兄弟要素も指定する必要がある
- flex-grow
  - アイテムの伸びる倍率（どれだけサイズを大きくするか）を指定する
  - FlexコンテナがFlexアイテムを格納しても余りがある場合、指定されたプロパティに従い、自動的に伸びて余白を埋める
  - 値は数値で指定（負の値もOK）
  - アイテム間の数値の差で、どのアイテムを優先的に大きくするかが決まる
- flex-shrink
  - アイテムの縮む倍率（どれだけサイズを小さくするか）を指定する
  - 「flex-grow」とは逆で、数字が大きいほど幅が狭くなる
  - 値は数値で指定（負の値はNG）
  - 「flex-wrap:nowrap」と同時に使用しないと効果がない
- flex-basis
  - アイテムの幅・高さを指定する
  - 幅か高さかはdirectionによる
  - 各アイテムの幅をwidthで指定しても、別のプロパティで比率を指定している場合、widthの値が無視されるので、そういうときに幅を固定したい時に使う
  - 値は単位を含む数値またはautoを指定（負の値はNG）
  - ここに記載したものが基準になる
- flex
  - flex-grow、flex-shrinkとflex-basisをショートハンド（まとめて）で記述（使うときはちょっと**注意！**）
- align-self
  - コンテナに指定したalign-itemsをアイテム個別に設定
  - コンテナのalign-itemsより優先する
    <dl>
      <dt>flex-start</dt>
      <dd>横配置は上揃え、縦配置は左揃え（デフォルト）</dd>
    </dl>
    <dl>
      <dt>flex-end</dt>
      <dd>横配置は下揃え、縦配置は右揃え</dd>
    </dl>
    <dl>
      <dt>center</dt>
      <dd>中央揃え</dd>
    </dl>
    <dl>
      <dt>baseline</dt>
      <dd>ベースライン揃え</dd>
    </dl>
    <dl>
      <dt>stretch</dt>
      <dd>要素全体を等幅で揃える</dd>
    </dl>
