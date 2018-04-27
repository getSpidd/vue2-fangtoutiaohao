<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>

        <transition name="slide-trans-old">  <!--旧值-->
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>

      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <!--<li @click="goto(prevIndex)">&lt;</li>-->
      <li v-for="(item, index) in slides"
          @click="goto(index)"
      >
        <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>       <!--判断  三元运算符-->
      </li>
      <!--<li @click="goto(nextIndex)">&gt;</li>-->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
      slides: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 1000
      }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: { // 计算属性，关联现有属性
    prevIndex() {
      if (this.nowIndex === 0) {
          return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
      // 让那个移走的可以多保留一会下标值
      goto(index) {
        this.isShow = false
        setTimeout(() => {
          this.nowIndex = index
          this.isShow = true
          this.$emit('onchange', index)
        }, 200)
      },
      runInv() {
          this.invId = setInterval(() => {
             this.goto(this.nextIndex)
          }, this.inv)
      },
      clearInv() {
        clearInterval(this.invId)
      }
  },
  mounted() {
    // console.log(this.slides)
    this.runInv()
  }

}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
  height: 20px;
  border-radius: 10px;
  background: rgba(34,34,34,.4);
}
.slide-pages li {
  display: inline-block;
}
.slide-pages li a{
  cursor: pointer;
  padding: 0 10px;
  color: #fff;
}

.slide-pages li .on {
  color: #000;
}
</style>
