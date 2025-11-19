# @nedelko/nuxt-fsd

![Banner](hero.png)

Модуль, конфигурирующий Nuxt 3 для работы в связке с FSD-архитектурой.

- Интуитивные автоимпорты
- Стандартизированная структура слоёв
- Быстрый старт разработки

## Установка

Выберите ваш пакетный менеджер:

### pnpm

```bash
pnpm add -D @nedelko/nuxt-fsd
```

### npm

```bash
npm install -D @nedelko/nuxt-fsd
```

### yarn

```bash
yarn add -D @nedelko/nuxt-fsd
```

## Использование

Добавьте модуль в `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@nedelko/nuxt-fsd"],
  srcDir: "src",
});
```

## Возможности модуля

### Базовая структура FSD

```
src/
 ├─ app/
 ├─ shared/
 ├─ entities/
 ├─ features/
 ├─ widgets/
 └─ pages/
```

Структура слоёв изменяема и может быть переопределена в конфигурации.

### Интуитивные автоимпорты

Любой файл с постфиксом `*.public.ts` или `*.public.vue` автоматически импортируется Nuxt'ом.

Имя импортируемой сущности не зависит от пути к файлу — это обеспечивает чистоту структуры и удобство сопровождения.

### Файловый роутинг

Папка `app/routes` является корнем маршрутизации. Все файлы внутри неё автоматически становятся страницами.

## Конфигурация

Пример конфигурации в `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  fsd: {
    rootDir: "src",
    autoImportTSSuffix: ".public",
    autoImportVueSuffix: ".public",
    layers: ["shared", "entities", "features", "widgets", "pages"],
  },
});
```

### Параметры конфигурации

| Поле                  | Тип        | Описание                                               |
| --------------------- | ---------- | ------------------------------------------------------ |
| `rootDir`             | `string`   | Корневая директория проекта                            |
| `autoImportTSSuffix`  | `string`   | Суффикс для автоимпорта TypeScript-файлов              |
| `autoImportVueSuffix` | `string`   | Суффикс для автоимпорта Vue-компонентов                |
| `layers`              | `string[]` | Слои FSD. Можно расширять, изменять или переопределять |

---
