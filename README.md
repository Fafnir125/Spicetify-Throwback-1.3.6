# Spicetify Throwback – Spotify 1.3.6

**Throwback** is a fun and nostalgic theme for the Spotify Desktop client that is inspired by the original UI design of the Spotify client and early 2010's-era web design.

*Long live skeuomorphism!*

![Screenshot](./static/screenshot-01.png)
![Screenshot](./static/screenshot-02.png)

## WARNING - ALPHA VERSION

This theme is **alpha quality software** and various things may break! Please only install this theme at your own risk! I may or may not have time to address all issues in the future!

## Fork-Hinweis (Spotify 1.3.x)

Dieser Fork passt Throwback an das aktuelle Spotify (getestet mit 1.3.6 auf macOS, Spicetify 2.46.4) an.
Alle Änderungen stehen in [`src/scss/_modern.scss`](src/scss/_modern.scss) und werden beim Build mit eingebunden;
dazu kommt `Throwback/theme.js` (macht die Titelleiste beim Scrollen solide).

Neu: bündiges graues Layout ohne Abstände, silberne Bevel-Buttons, Glaskugel-Play-Buttons, eingelassene Regler,
Lucida-Grande-Schrift, überarbeitete Künstler-, Podcast- und Playlist-Seiten, Werbebanner der Startseite ausgeblendet.

Spotify nutzt gehashte Klassennamen – nach größeren Spotify-Updates können Regeln ins Leere laufen.

## Requirements (Original)

- Spotify Desktop `v1.2.53.440`
- Spicetify `v2.38.7`

**NOTE:** This theme has only been thoroughly tested on the Spotify desktop client for Windows!

## Installation

Copy the `Throwback` folder to your Spicetify config folder.

Für `theme.js` zusätzlich `spicetify config inject_theme_js 1` setzen.

Run the following to enable the theme:

```bash
spicetify config current_theme Throwback
spicetify apply
```
