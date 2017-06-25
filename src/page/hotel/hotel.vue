<template>
  <div>
    <div class="imgas-brand">
      {{'计数：' + $store.state.count}}
    </div>
  </div>
</template>

<script>

  import { mapState, mapGetters, mapMutations } from 'vuex';
  import store from '../../store';
  import Vue from 'vue';

  export default {
    data(){
      return{
        username: 'glen',
        localCount: 100,
        obj: {
            home: 12123
        }
      }
    },
    created(){
      this.SOME_MUTATION({
          amount: 300
      });
      this.$store.dispatch('incrementAsync', {
        amount: 200
      })

      // console.log('this.$store.state.moduleA.stateA: ', this.$store.state.moduleA.stateA);
      // 以下说明：
      // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——
      // 这样使得多个模块能够对同一 mutation 或 action 作出响应
      // 即是可以直接通过通过this.$store进行调用，而不用this.$store.state.moduleA.stateA
      // 可以通过打印 this.$store 查看对应的方法属性

      // this.$store.commit('incrementA');
      // this.$store.dispatch('incrementIfOddOnRootSum');
      //console.log('this.$store.getters.moduleA.sumWithRootCount: ', this.$store.getters.sumWithRootCount);

    },
    mounted(){
    },
    components:{},
    computed: {
      ...mapState([
          'count','user_name'
      ]),
      ...mapGetters([
          'doneTodos', 'addMoreOne'
      ]),
      localComputed () { return 'asdfas' }
    },
    methods: {
      ...mapMutations([
        'increment', 'SOME_MUTATION' // 映射 this.increment() 为 this.$store.commit('increment')
      ])
    },

  }

</script>

<style lang="less" scoped>


  @import '../../common/css/mixin.less';

  .imgas-brand {
    .px2rem(margin-top, 80);
    .px2rem(width, 60);
    .px2rem(height, 36);
    .bg-image('../../page/hotel/brand');
    background-size: 100% 100%;
    background-position: left top;
    background-repeat: no-repeat;
  }

</style>
