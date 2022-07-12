import React from "react";
import { View } from "react-native";

// screens
import { Shazam } from "./Shazam";
import { Library } from "./Library";
import { Settings } from "./Settings";

interface ComposerTransferData {
  screen_id: "Shazam" | "Settings" | "Library";
}

export function Composer({ screen_id }: ComposerTransferData) {
  let ChildrenElement = Shazam;

  switch (screen_id) {
    case "Library":
      ChildrenElement = Library;
      break;
    case "Settings":
      ChildrenElement = Settings;
      break;

    default:
      ChildrenElement = Shazam;
      break;
  }

  return (
    <View>
      <ChildrenElement />
    </View>
  );
}
