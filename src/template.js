module.exports = function() {
  return function(h) {

  var items = [];

  this.pages.map(function(page) {
      items.push(
        <li class={"VuePagination__pagination-item page-item"}>
        <a class={"page-link pagination-link "+this.activeClass(page)} role="button"
        on-click={this.setPage.bind(this, page)}>{page}</a>
        </li>
        )
  }.bind(this));

  return <div class="pagination VuePagination">
  <ul v-show={this.totalPages>1}
  class="pagination-list VuePagination__pagination">

  <li class={"VuePagination__pagination-item page-item VuePagination__pagination-item-prev-chunk "+this.allowedChunkClass(-1)}>
  <a class="page-link pagination-previous" href="javascript:void(0);"
  on-click={this.setChunk.bind(this,-1)}>&lt;&lt;</a>
  </li>


  <li class={"VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page "+this.allowedPageClass(this.page-1)}>
  <a class="page-link pagination-previous" href="javascript:void(0);"
  on-click={this.prev.bind(this)}>&lt;</a>
  </li>

  {items}

  <li class={"VuePagination__pagination-item page-item VuePagination__pagination-item-next-page "+this.allowedPageClass(this.page+1)}>
  <a class="page-link pagination-link" href="javascript:void(0);"
  on-click={this.next.bind(this)}>&gt;</a>
  </li>

  <li class={"VuePagination__pagination-item page-item VuePagination__pagination-item-next-chunk "+this.allowedChunkClass(1)}>
  <a class="page-link pagination-next" href="javascript:void(0);"
  on-click={this.setChunk.bind(this,1)}>&gt;&gt;</a>
  </li>
  </ul>

  <p v-show={parseInt(this.records)}
  class="VuePagination__count">{this.count}</p>
  </div>
}
}
