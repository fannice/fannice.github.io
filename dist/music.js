const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#e9e9e9',
    audio: [
      {
        name: "沙漠骆驼",
        artist: '展展与罗罗',
        url: 'http://www.170mv.com/kw/other.web.ri01.sycdn.kuwo.cn/resource/n3/45/33/75169536.mp3',
        cover: 'http://star.kuwo.cn/star/starheads/180/28/57/2182659867.jpg',
      },
      {
        name: '丑八怪',
        artist: '薛之轩',
        url: 'http://www.ytmp3.cn/down/35065.mp3',
        cover: 'http://img.ytmp3.cn/image/58.jpg',
      },
      {
        name: '小苹果',
        artist: '筷子兄弟',
        url: 'http://www.ytmp3.cn/down/57984.mp3',
        cover: 'http://img.ytmp3.cn/image/21.jpg',
      }
    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (data) => {
    setTheme(data.index);
});