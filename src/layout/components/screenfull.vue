<template>
<Tooltip :content="screenfullState ? '退出全屏' : '全屏'" placement="bottom">
    <Icon @click.native="screenfullChange" size='24' :type="screenfullState ? 'md-contract' : 'md-expand'" />
</Tooltip>
</template>
<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      screenfullState: false
    };
  },
  methods: {
    screenfullChange: () => {
      // this.screenfullState = this.screenfullState ? false : true;

      if (screenfull.enabled) {
        screenfull.toggle();
      }
    }
  }
};
</script>

