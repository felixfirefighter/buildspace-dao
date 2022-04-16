import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x8273295a47dA9e38F30D84aB21FfC93eC9637547");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Potato Hat",
        description: "This NFT will give you access to PotatoDAO!",
        image: readFileSync("scripts/assets/potato-hat.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();