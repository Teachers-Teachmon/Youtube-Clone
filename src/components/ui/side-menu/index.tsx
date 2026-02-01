import { useSideMenuStore } from "@/stores/useSideMenuStore";
import * as S from "./style";
import { useEffect, useState } from "react";

function SideMenu() {
  const shortcuts = [
    { icon: "/assets/home.svg", script: "홈" },
    { icon: "/assets/shorts.svg", script: "Shorts" },
    { icon: "/assets/subscriptions.svg", script: "구독" },
    { icon: "/assets/accountBlack.svg", script: "내 페이지" },
  ];
  const openShortcuts = [
    [
      { icon: "/assets/home.svg", script: "홈" },
      { icon: "/assets/shorts.svg", script: "Shorts" },
      { icon: "/assets/subscriptions.svg", script: "구독" },
      { icon: "/assets/accountBlack.svg", script: "내 페이지" },
      { icon: "/assets/history.svg", script: "기록" },
    ],
  ];
  const isOpen = useSideMenuStore(state => state.isOpen);
  const [width, setWidth] = useState(72);

  useEffect(() => {
    setWidth(isOpen ? 240 : 72);
  }, [isOpen]);

  return (
    <div className="side-menu">
      <S.Space width={width} />
      <S.Base width={width}>
        {isOpen
          ? openShortcuts.map((v, i) => (
              <S.ShortcutBlock key={i}>
                {v.map((vv, j) => (
                  <S.OpenShortcut key={j}>
                    <img src={vv.icon} className="icon" />
                    {vv.script}
                  </S.OpenShortcut>
                ))}
              </S.ShortcutBlock>
            ))
          : shortcuts.map((v, i) => (
              <S.Shortcut key={i}>
                <img src={v.icon} className="icon" />
                {v.script}
              </S.Shortcut>
            ))}
      </S.Base>
    </div>
  );
}

export default SideMenu;
