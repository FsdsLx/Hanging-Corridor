# 倒悬回廊

`倒悬回廊` 是一个基于 Electron 和 Capacitor Android 封装的静态游戏项目，可发布为 Windows 便携版和 Android 安装包。

## 下载

- [Windows 版下载](../../releases/latest)
- [Android 版下载](../../releases/latest)

发布时请在同一个 GitHub Release 中上传以下文件，用户即可从上面的入口进入下载：

- Windows: `Inverted-Corridor-Portable-<version>.exe`
- Android: `app-release.apk` 或你最终命名的 APK 文件

## 开发

安装依赖：

```bash
npm install
```

准备 Web 资源：

```bash
npm run build:web
```

同步 Android 工程：

```bash
npm run android:sync
```

打包 Windows 便携版：

```bash
npm run dist:portable
```

## 发布建议

- 源码提交到仓库
- Windows EXE 和 Android APK 作为 GitHub Release 附件上传
- README 首页统一把下载入口指向 `Releases`
