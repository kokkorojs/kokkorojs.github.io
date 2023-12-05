<template>
  <div ref="messageRef" class="chat-message-container" :class="{ show }">
    <chat-avatar :id="props.id" :color="props.color" :avatar="props.avatar" :nickname="props.nickname" />
    <div class="message-box">
      <div class="nickname">{{ props.nickname }}</div>
      <div class="message shadow-sm">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

interface ChatMessageProps {
  avatar?: string;
  id?: number;
  nickname?: string;
  color?: string;
}

const props = defineProps<ChatMessageProps>();
const messageRef = ref<HTMLElement | null>();
const show = ref(false);

const handleScroll = () => {
  if (!messageRef.value) {
    return;
  }
  const observer = new IntersectionObserver(function (this: IntersectionObserver, entries) {
    entries.forEach(entrie => {
      if (!entrie.isIntersecting) {
        return;
      }
      show.value = true;
      this.unobserve(messageRef.value!);
    });
  });

  observer.observe(messageRef.value);
};

onMounted(() => {
  handleScroll();
});
</script>

<style lang="scss" scoped>
.chat-message-container {
  position: relative;
  margin: 1rem 0;
  opacity: 0;
  transform: translateX(-10%);
  transition: transform 0.4s ease-out, opacity 0.4s ease-in;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
}

.message-box {
  display: inline-block;
  margin-left: 0.5rem;
  max-width: calc(100% - 3rem);
  vertical-align: top;

  .nickname {
    font-size: 0.8rem;
    color: gray;
  }

  .message {
    position: relative;
    font-size: 0.9rem;
    border-radius: 0.5rem;
    background-color: var(--vp-c-bg);
    word-break: break-all;
    padding: 0.6rem 0.7rem;
    margin-top: 0.2rem;
    white-space: pre-wrap;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    > img {
      border-radius: 0.5rem;
      vertical-align: middle;
    }

    // &::before {
    //   content: "";
    //   position: absolute;
    //   right: 100%;
    //   top: 0px;
    //   width: 8px;
    //   height: 8px;
    //   border: 0 solid transparent;
    //   border-bottom-width: 5px;
    //   border-bottom-color: currentColor;
    //   border-radius: 0 0 0 1rem;
    //   color: var(--vp-c-bg);
    // }
  }
}
</style>
