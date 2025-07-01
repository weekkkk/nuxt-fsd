<script setup lang="ts">
import { ImportComponent, importUtil } from "@/shared";
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
      <ImportComponent />
    </p>
  </section>
</template>
