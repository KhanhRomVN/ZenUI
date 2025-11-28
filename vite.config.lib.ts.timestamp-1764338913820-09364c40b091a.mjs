// vite.config.lib.ts
import { defineConfig } from "file:///home/khanhromvn/Documents/Coding/ZenUI/node_modules/vite/dist/node/index.js";
import react from "file:///home/khanhromvn/Documents/Coding/ZenUI/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { resolve } from "path";
import dts from "file:///home/khanhromvn/Documents/Coding/ZenUI/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/khanhromvn/Documents/Coding/ZenUI";
var vite_config_lib_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/main.tsx", "**/*.test.ts", "**/*.test.tsx"]
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__vite_injected_original_dirname, "src/index.ts")
      },
      name: "ZenUI",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const ext = format === "es" ? "js" : "cjs";
        return `${entryName}.${ext}`;
      }
    },
    rollupOptions: {
      external: ["react", "react-dom", "framer-motion", "lucide-react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "lucide-react": "LucideReact"
        }
      }
    },
    outDir: "dist",
    emptyOutDir: true
  }
});
export {
  vite_config_lib_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubGliLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUva2hhbmhyb212bi9Eb2N1bWVudHMvQ29kaW5nL1plblVJXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9raGFuaHJvbXZuL0RvY3VtZW50cy9Db2RpbmcvWmVuVUkvdml0ZS5jb25maWcubGliLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2toYW5ocm9tdm4vRG9jdW1lbnRzL0NvZGluZy9aZW5VSS92aXRlLmNvbmZpZy5saWIudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgICAgaW5jbHVkZTogW1wic3JjLyoqLypcIl0sXG4gICAgICBleGNsdWRlOiBbXCJzcmMvbWFpbi50c3hcIiwgXCIqKi8qLnRlc3QudHNcIiwgXCIqKi8qLnRlc3QudHN4XCJdLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHtcbiAgICAgICAgaW5kZXg6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC50c1wiKSxcbiAgICAgIH0sXG4gICAgICBuYW1lOiBcIlplblVJXCIsXG4gICAgICBmb3JtYXRzOiBbXCJlc1wiLCBcImNqc1wiXSxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0LCBlbnRyeU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgZXh0ID0gZm9ybWF0ID09PSBcImVzXCIgPyBcImpzXCIgOiBcImNqc1wiO1xuICAgICAgICByZXR1cm4gYCR7ZW50cnlOYW1lfS4ke2V4dH1gO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcImZyYW1lci1tb3Rpb25cIiwgXCJsdWNpZGUtcmVhY3RcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHJlYWN0OiBcIlJlYWN0XCIsXG4gICAgICAgICAgXCJyZWFjdC1kb21cIjogXCJSZWFjdERPTVwiLFxuICAgICAgICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIkZyYW1lck1vdGlvblwiLFxuICAgICAgICAgIFwibHVjaWRlLXJlYWN0XCI6IFwiTHVjaWRlUmVhY3RcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvdXREaXI6IFwiZGlzdFwiLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStTLFNBQVMsb0JBQW9CO0FBQzVVLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sMEJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLFNBQVMsQ0FBQyxVQUFVO0FBQUEsTUFDcEIsU0FBUyxDQUFDLGdCQUFnQixnQkFBZ0IsZUFBZTtBQUFBLElBQzNELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQzFDO0FBQUEsTUFDQSxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFFBQVEsY0FBYztBQUMvQixjQUFNLE1BQU0sV0FBVyxPQUFPLE9BQU87QUFDckMsZUFBTyxHQUFHLFNBQVMsSUFBSSxHQUFHO0FBQUEsTUFDNUI7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxhQUFhLGlCQUFpQixjQUFjO0FBQUEsTUFDaEUsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IsaUJBQWlCO0FBQUEsVUFDakIsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
