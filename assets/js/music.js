const audio = [
  {
    name: '完璧な世界 full',
    artist: '榊原ゆい / BLUE DOOR RECORD',
    url: '/assets/musics/完璧な世界 full.m4a',
    cover: 'https://p1.music.126.net/MsPww4hKQhMfjKJC112p7w==/109951165069555442.jpg?param=130y130',
    lrc: '/assets/lyrics/完璧な世界 full.lrc',
  },
  {
    name: 'リトルアドベンチャー',
    artist: '諸星すみれ / 小倉唯 / 日高里菜',
    url: '/assets/musics/リトルアドベンチャー.m4a',
    cover: 'http://p1.music.126.net/XFsiL-OdZTsq04DtbgLU1w==/109951163568867279.jpg?param=130y130',
    lrc: '/assets/lyrics/リトルアドベンチャー.lrc',
  },
  {
    name: 'つなぐもの',
    artist: '種田梨沙 / 東山奈央 / 早見沙織',
    url: '/assets/musics/つなぐもの.m4a',
    cover: 'http://p1.music.126.net/53b-RQDfkB63N5el8nEh6g==/109951163556786166.jpg?param=130y130',
    lrc: '/assets/lyrics/つなぐもの.lrc',
  }
]
const aplayer = new APlayer({
  container: document.getElementById('aplayer'),
  lrcType: 3,
  fixed: true,
  volume: 0.2,
  audio,
});
const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = ({ index = 0 }) => {
  if (!aplayer.list.audios[index].theme) {
    xhr.onload = function () {
      let coverUrl = URL.createObjectURL(this.response);
      image.onload = function () {
        let color = colorThief.getColor(image);
        aplayer.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        URL.revokeObjectURL(coverUrl)
      };
      image.src = coverUrl;
    }
    xhr.open('GET', aplayer.list.audios[index].cover, true);
    xhr.responseType = 'blob';
    xhr.send();
  }
};
setTheme(aplayer.list.index);
aplayer.on('listswitch', (index) => {
  setTheme(index);
});
