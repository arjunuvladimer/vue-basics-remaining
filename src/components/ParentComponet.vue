<template>
    <div>
        <h1>Directives</h1>
        <h2>1. Vtext => Content</h2>
            <span v-text="fname"></span>
            <span>{{fname}}</span>
         <h2>2. Vhtml => HTML</h2>
            <div v-html="htmlContent"></div>
         <h2>3. Vshow => Flag/Condition </h2>
            <div v-show="dontshow">
                <h1>I am showing the content</h1>
            </div>
         <h2>3. Vbind => Property </h2>
            <div v-bind:fname="Chris">
                <h1>I am calling v-bind {{fname}}</h1>
            </div>
        <h2>4. Vfor => Iteration</h2>
            <h3 v-for="(value,key) in values" v-bind:key="value.id">
                {{value.fname}}
            </h3>
        <h2>Conditiona Statements [if(true/false),else, else if]</h2>
           <h3 v-if="dontshow">
                Some Content
           </h3>
            <h4 v-else-if="newElseIf">
                Else If Content
           </h4>
        <!--Vmodel, Von-->
        <h2>Custom Directives</h2>
          <label v-colorChange="'50px'">Change the color</label>

        <h1>Filters</h1>
        <p>
            {{
                $filters.currencyUSD(accountBalance)
            }}
        </p>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default{
    name: "ParentComponent",
    componets: {
        ChildComponent
    },
    data() {
        return {
            fname: "Arjun",
            htmlContent: `<h1>Hello WOrld</h1> <h2>Second Tag</h2>`,
            dontshow:true,
            newElseIf:true,
            accountBalance:"Hello World",
            values: [
                {
                    id:1,
                    fname:"Arjun"
                },
                {
                    id:2,
                    fname:"Arjun"
                },
                ]
        };
    },
  
   
}
</script>

<style scoped>
</style>