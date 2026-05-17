# 倒悬回廊

`倒悬回廊` 是一个基于 Electron 和 Capacitor Android 封装的静态游戏项目，可发布为 Windows 便携版和 Android 安装包。

## 下载

[![最新版本](https://img.shields.io/github/v/release/FsdsLx/Hanging-Corridor?label=%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC)](https://github.com/FsdsLx/Hanging-Corridor/releases/latest)
[![Release 下载](https://img.shields.io/github/downloads/FsdsLx/Hanging-Corridor/total?label=Release%20%E4%B8%8B%E8%BD%BD)](https://github.com/FsdsLx/Hanging-Corridor/releases)

### 快速入口

- [最新 Release 页面](https://github.com/FsdsLx/Hanging-Corridor/releases/latest)
- [Windows 版下载说明](#windows-版)
- [Android 版下载说明](#android-版)

### Windows 版

- 进入 [最新 Release](https://github.com/FsdsLx/Hanging-Corridor/releases/latest) 后，下载 `.exe` 附件即可
- 如果发布时使用固定文件名，可直接使用这个直链：
- [下载 Windows 版 EXE](https://github.com/FsdsLx/Hanging-Corridor/releases/latest/download/Hanging-Corridor-Windows.exe)

### Android 版

- 进入 [最新 Release](https://github.com/FsdsLx/Hanging-Corridor/releases/latest) 后，下载 `.apk` 附件即可
- 如果发布时使用固定文件名，可直接使用这个直链：
- [下载 Android 版 APK](https://github.com/FsdsLx/Hanging-Corridor/releases/latest/download/Hanging-Corridor-Android.apk)

### 发布文件命名

为保证 README 里的直链长期有效，建议你在每次发布时统一使用以下文件名上传到同一个 GitHub Release：

- Windows: `Hanging-Corridor-Windows.exe`
- Android: `Hanging-Corridor-Android.apk`

如果你继续使用带版本号的文件名，README 里的 `最新 Release 页面` 入口仍然可用，但上面的直链就需要一起更新。

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
- 优先使用固定文件名上传，这样 README 中的直链不需要每次修改
- 每次发版后检查 `最新 Release 页面` 和两个直链是否可正常下载
