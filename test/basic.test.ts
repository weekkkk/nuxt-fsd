import { fileURLToPath } from "node:url";
import { $fetch, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";
import { entityImportUtil, entityPublicIndexUtil } from "./fixtures/basic/src/entities/entity/utils";
import { entityPublicUtil } from "./fixtures/basic/src/entities/entity/utils/entityPublicUtil.public";
import { entityFeatureImportUtil, entityFeaturePublicIndexUtil } from "./fixtures/basic/src/features/entity/utils";
import { entityFeaturePublicUtil } from "./fixtures/basic/src/features/entity/utils/entityFeaturePublicUtil.public";
import { importUtil, publicIndexUtil } from "./fixtures/basic/src/shared/utils";
import { publicUtil } from "./fixtures/basic/src/shared/utils/publicUtil.public";
import { entityWidgetImportUtil, entityWidgetPublicIndexUtil } from "./fixtures/basic/src/widgets/entity/utils";
import { entityWidgetPublicUtil } from "./fixtures/basic/src/widgets/entity/utils/entityWidgetPublicUtil.public";

describe("fsd", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  describe("shared", async () => {
    describe("ui", async () => {
      it("pascal case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"pascal-case-public-component\"");
      });
      it("kebab case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"kebab-case-public-component\"");
      });
      it("import component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"import-component\"");
      });
      describe("folder", async () => {
        it("pascal case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"folder-pascal-case-public-component\"");
        });
        it("kebab case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"folder-kebab-case-public-component\"");
        });
      });
    });
    describe("utils", async () => {
      it("public index util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(publicIndexUtil());
      });
      it("public util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(publicUtil());
      });
      it("import util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(importUtil());
      });
    });
  });

  describe("entities", async () => {
    describe("ui", async () => {
      it("entity pascal case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-pascal-case-public-component\"");
      });
      it("entity kebab case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-kebab-case-public-component\"");
      });
      it("entity import component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-import-component\"");
      });
      describe("folder", async () => {
        it("entity pascal case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-pascal-case-public-component\"");
        });
        it("entity kebab case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-kebab-case-public-component\"");
        });
      });
    });
    describe("utils", async () => {
      it("entity public index util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityPublicIndexUtil());
      });
      it("entity public util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityPublicUtil());
      });
      it("entity import util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityImportUtil());
      });
    });
  });

  describe("features", async () => {
    describe("ui", async () => {
      it("feature public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"feature-public-component\"");
      });
      it("entity feature pascal case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-feature-pascal-case-public-component\"");
      });
      it("entity feature kebab case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-feature-kebab-case-public-component\"");
      });
      it("entity feature import component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-feature-import-component\"");
      });
      describe("folder", async () => {
        it("entity feature pascal case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-feature-pascal-case-public-component\"");
        });
        it("entity feature kebab case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-feature-kebab-case-public-component\"");
        });
      });
    });
    describe("utils", async () => {
      it("entity feature public index util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityFeaturePublicIndexUtil());
      });
      it("entity feature public util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityFeaturePublicUtil());
      });
      it("entity feature import util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityFeatureImportUtil());
      });
    });
  });

  describe("widgets", async () => {
    describe("ui", async () => {
      it("widget public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"widget-public-component\"");
      });
      it("entity widget pascal case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-widget-pascal-case-public-component\"");
      });
      it("entity widget kebab case public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-widget-kebab-case-public-component\"");
      });
      it("entity widget import component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"entity-widget-import-component\"");
      });
      describe("folder", async () => {
        it("entity widget pascal case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-widget-pascal-case-public-component\"");
        });
        it("entity widget kebab case public component", async () => {
          const html = await $fetch("/");
          expect(html).toContain("data-test-id=\"entity-folder-widget-kebab-case-public-component\"");
        });
      });
    });
    describe("utils", async () => {
      it("entity widget public index util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityWidgetPublicIndexUtil());
      });
      it("entity widget public util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityWidgetPublicUtil());
      });
      it("entity feature import util", async () => {
        const html = await $fetch("/");
        expect(html).toContain(entityWidgetImportUtil());
      });
    });
  });

  describe("pages", async () => {
    describe("folder", async () => {
      it("page public component", async () => {
        const html = await $fetch("/");
        expect(html).toContain("data-test-id=\"folder-page-public-component\"");
      });
    });
  });
});
