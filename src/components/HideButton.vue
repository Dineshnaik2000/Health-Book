<template>


<div class="container-fluid more-top">
    <div class="row">
      <div class="col-md-12">
        <div class="card box-simple border-0">
          <h2>Agenda Terbaru  
               data is show up on the list, the problem is i can't hide the button if that data less than limit. so i wan't to compare the data length with limit in v-if button. i clone the data to array,but i just get the length is 1. original data return is like this {one: value},{two:value},{three: value}.... i've tried all way, and finally it's solve now with this way: I directly clone the data to array in dataFilter with this: const data = [...this.dataNews] n also directly sort the data in the same computed. and then i can get the length and can compare to the limit for button. thank you. utton if that data less than limit. so i wan't to compare the data length with limit in v-if button. i clone the data to array,but i just get the length is 1. original data return is like this {one: value},{two:value},{three: value}.... i've tried all way, and finally it's solve now with this way: I directly clone the data to array in dataFilter with this: const data = [...this.dataNews] n also directly sort the data in the same computed. and then i can get the length and can compare to the limit for button. thank you

          </h2>
          <div class="mt-5 mb-5">
            <div class="row row-cols-1 row-cols-md-3 g-5 mt-2 px-4">
            
              <CardSlide class="mb-4" v-for="each in dataFilter"
              :key="each.id"
              :content="each" />
            </div>
            <button v-if="dataFilter && dataFilter.length < dataEvents.length" @click="limit*=2">Show More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script >

export default {
    name:'HideButton',
      props: {
    dataEvents: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      limit: 1
    }
  },
//    components: {
//     CardSlide,
//   },
 
  computed: {
    dataFilter () {
      if (this.dataEvents) {
          console.log(this.dataEvents)
        return this.dataEvents.slice(0, this.limit)
      } else {
        return this.dataEvents
      }
    }
  }
  ,
  methods:{
      getLinesCount(element) {
  var prevLH = element.style.lineHeight;
  var factor = 1000;
  element.style.lineHeight = factor + 'px';

  var height = element.getBoundingClientRect().height;
  element.style.lineHeight = prevLH;
 console.log("len",Math.floor(height / factor))
  return Math.floor(height / factor);
}
  }




}
</script>

<style>

</style>