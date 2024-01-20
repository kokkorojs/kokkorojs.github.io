// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.scss';
import ChatPanel from './components/chat/ChatPanel.vue';
import ChatAvatar from './components/chat/ChatAvatar.vue';
import ChatMessage from './components/chat/ChatMessage.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component('ChatAvatar', ChatAvatar);
    app.component('ChatMessage', ChatMessage);
    app.component('ChatPanel', ChatPanel);
  },
} satisfies Theme;
