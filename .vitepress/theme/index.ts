import DefaultTheme from 'vitepress/theme';

import Layout from './components/theme/Layout.vue';
import NotFound from './components/theme/NotFound.vue';
import ChatPanel from './components/chat/ChatPanel.vue';
import ChatAvatar from './components/chat/ChatAvatar.vue';
import ChatMessage from './components/chat/ChatMessage.vue';

export default {
  // ...DefaultTheme,
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component('ChatAvatar', ChatAvatar);
    app.component("ChatMessage", ChatMessage);
    app.component("ChatPanel", ChatPanel);
  }
}
