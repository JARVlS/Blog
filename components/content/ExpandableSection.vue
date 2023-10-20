<template>
  <details class="post_point_details">
    <summary class="post_point_summary">
      <contentSlot :use="$slots.summary" unwrap="" />
    </summary>
    <div class="summary_content">
        <contentSlot :use="$slots.content" />

    </div>
  </details>
</template>

<style >
.summary_content{
  padding: 0 0 0 2rem;
}
.summary_content ul{
  margin: 1rem 0 1rem 2rem;
}

.post_point_details{
    margin-left: 1rem;
    height: max-content;
}

.post_point_summary ul{
    margin: 0;
}

.post_point_summary{
    list-style-type: none;  
    padding: .5rem 0 .5rem 0;
  cursor: pointer;
}
.post_point_summary::before{
    content: "▶";
    margin-right: .5rem;
    font-size: 1rem;
    color: var(--color_main);
    background: transparent;
}

.post_point_details strong{
  color: var(--color_main);
}

@media(min-width: 1200px){
  .link_section{
    grid-template-columns: auto auto auto;
    gap: 3rem;
  }
}
</style>