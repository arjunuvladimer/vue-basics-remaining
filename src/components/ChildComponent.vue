<template>
    <div>
      
      <p>{{fname}}</p>
      <p>{{title}}</p>
      
    </div>
</template>

<script>
import simpleMixin from '../simplemixin'
export default{
    name:'ChildComponent',
    mixins:[simpleMixin]
}
</script>