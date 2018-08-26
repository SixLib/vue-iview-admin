
import md from '@/assets/markdown/readme.md'
export default {
  getDocunentData: () => {
    return {
      code: 200,
      data: md
    };
  }
};
