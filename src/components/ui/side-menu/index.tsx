import { memo } from "react";
import * as S from "./style";
import { openShortcuts, shortcuts } from "@/constants/sideMenu";

interface props {
  isOpen: boolean;
}
function SideMenu({ isOpen }: props) {
  const width = isOpen ? 240 : 72;

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

export default memo(SideMenu);
