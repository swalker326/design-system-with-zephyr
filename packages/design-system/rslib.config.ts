import { defineConfig } from "@rslib/core";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { pluginReact } from "@rsbuild/plugin-react";
import { RsbuildPlugin } from "@rsbuild/core";
import { withZephyr } from "zephyr-rspack-plugin";

const pluginZephyrRsbuild = (): RsbuildPlugin => ({
  name: "plugin-zephyr-rsbuild",
  setup(api) {
    api.onBeforeCreateCompiler(async ({ bundlerConfigs }) => {
      const zeConfig = await withZephyr()(bundlerConfigs[0]);
    });
  }
});

export default defineConfig({
  lib: [
    {
      format: "mf",
      output: {
        distPath: {
          root: "./dist/mf"
        },
        // for production, add online assetPrefix here
        assetPrefix: "auto"
      },
      // for Storybook to dev
      dev: {
        assetPrefix: "http://localhost:3001/"
      },
      plugins: [
        pluginModuleFederation(
          {
            name: "designSystem",
            filename: "remoteEntry.js",
            exposes: {
              "./button": "./src/components/ui/button.tsx"
            },
            shared: {
              react: {
                singleton: true,
                eager: true,
                requiredVersion: "^19.1.0"
              },
              "react-dom": {
                singleton: true,
                eager: true,
                requiredVersion: "^19.1.0"
              }
            }
          },
          {}
        ),
        pluginZephyrRsbuild()
      ]
    }
  ],
  server: {
    port: 3001
  },
  output: {
    target: "web"
  },
  plugins: [pluginReact()]
});
