<script setup lang="ts">
import { entityForlderComponentImportUtil, EntityImportComponent, entityImportUtil } from "@/entities/entity";
import { EntityFeatureImportComponent, entityFeatureImportUtil, entityForlderFeatureComponentImportUtil } from "@/features/entity";
import { forlderComponentImportUtil, ImportComponent, importUtil } from "@/shared";
</script>

<template>
  <section>
    <h1>
      Nuxt FSD module playground!
    </h1>

    <p>
      Layers and segments use cases
    </p>
  </section>

  <section>
    <h1>shared</h1>

    <h2>utils</h2>
    <p>
      {{ publicIndexUtil() }}
    </p>
    <p>
      {{ importUtil() }}
    </p>
    <p>
      {{ publicUtil() }}
    </p>

    <h2>ui</h2>
    <p>
      <PascalCaseComponent />
    </p>
    <p>
      <kebab-case-component />
    </p>
    <p>
      <FolderPascalCaseComponent />
    </p>
    <p>
      <folder-kebab-case-component />
    </p>
    <p>
      {{ forlderComponentPublicUtil() }}
    </p>
    <p>
      {{ forlderComponentPublicIndexUtil() }}
    </p>
    <p>
      <ImportComponent />
    </p>
    <p>
      {{ forlderComponentImportUtil() }}
    </p>
  </section>

  <section>
    <h1>entities</h1>

    <h2>utils</h2>
    <p>
      {{ entityPublicIndexUtil() }}
    </p>
    <p>
      {{ entityImportUtil() }}
    </p>
    <p>
      {{ entityPublicUtil() }}
    </p>

    <h2>ui</h2>
    <p>
      <EntityPascalCaseComponent />
    </p>
    <p>
      <entity-kebab-case-component />
    </p>
    <p>
      <EntityFolderPascalCaseComponent />
    </p>
    <p>
      <entity-folder-kebab-case-component />
    </p>
    <p>
      {{ entityForlderComponentPublicUtil() }}
    </p>
    <p>
      {{ entityForlderComponentPublicIndexUtil() }}
    </p>
    <p>
      <EntityImportComponent />
    </p>
    <p>
      {{ entityForlderComponentImportUtil() }}
    </p>
  </section>

  <section>
    <h1>features</h1>

    <h2>utils</h2>
    <p>
      {{ entityFeaturePublicIndexUtil() }}
    </p>
    <p>
      {{ entityFeatureImportUtil() }}
    </p>
    <p>
      {{ entityFeaturePublicUtil() }}
    </p>

    <h2>ui</h2>
    <p>
      <EntityFeaturePascalCaseComponent />
    </p>
    <p>
      <entity-feature-kebab-case-component />
    </p>
    <p>
      <EntityFolderFeaturePascalCaseComponent />
    </p>
    <p>
      <entity-folder-feature-kebab-case-component />
    </p>
    <p>
      {{ entityForlderFeatureComponentPublicUtil() }}
    </p>
    <p>
      {{ entityForlderFeatureComponentPublicIndexUtil() }}
    </p>
    <p>
      <EntityFeatureImportComponent />
    </p>
    <p>
      {{ entityForlderFeatureComponentImportUtil() }}
    </p>
  </section>
</template>
