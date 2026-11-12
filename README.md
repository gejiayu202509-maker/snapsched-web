# SnapSched — public project webpage

Public project presentation for AILT9019 Team 2.

Live URL: https://gejiayu202509-maker.github.io/snapsched-web/

Application repository: https://github.com/Ding-07-cn/SnapSched (authorised access required).

This separate static site contains no API keys, student identifiers, private messages or application backend. The Streamlit application remains in its existing repository. This page does not process uploads or call an AI API.

## Files and local preview

`index.html`, `styles.css` and `script.js` are buildless. `assets/` contains the team-created synthetic sample poster, a reviewed historical application screenshot and the site icon.

```sh
python3 -m http.server 8787 --bind 127.0.0.1
```

Open http://127.0.0.1:8787. Native HTML dialog, details and anchor controls are used; JavaScript handles the sample-poster modal and copying installation commands.

## Publishing

GitHub Pages publishes `main` at `/`. Push changes to this repository to update the public site. No framework or external CDN dependencies are needed.

## Evidence and updates

- Test counts and live baseline are dated 28 October 2026, sourced from the application repository's integration and evaluation records.
- The first complete live run matched 11/12 synthetic cases, including all eight ordinary cases. One API failure recovered on a separately recorded retry. It is not a real-world accuracy benchmark.
- Independent review and the full planned calendar-client import matrix remain unconfirmed.
- The hero is an illustration of a synthetic example, not a screenshot or live model output. The actual screenshot is dated separately.
- Final YouTube recordings are not yet available; no placeholder video URLs or claims of their completion are published. Add the real links when recorded.
- Codex assisted with development and text. Review claims against the current project evidence when updating.
