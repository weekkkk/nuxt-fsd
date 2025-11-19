# @nedelko/nuxt-fsd

![Banner](hero.png)

Модуль, конфигурирующий Nuxt 3 для работы в связке с FSD-архитектурой.

- Интуитивные автоимпорты
- Удобные структуры слоёв
- Быстрый старт разработки

## 🚀 Установка

Выберите ваш пакетный менеджер:

### **pnpm**

```bash
pnpm add -D @nedelko/nuxt-fsd
```

### **npm**

```bash
npm install -D @nedelko/nuxt-fsd
```

### **yarn**

```bash
yarn add -D @nedelko/nuxt-fsd
```

## 🧩 Использование

Добавьте модуль в `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["@nedelko/nuxt-fsd"],
  srcDir: "src",
});
```

## 📁 Возможности модуля

### 🔷 Базовая структура FSD

```
src/
 ├─ app/
 ├─ shared/
 ├─ entities/
 ├─ features/
 ├─ widgets/
 └─ pages/
```

Структура слоёв изменяема — можно передать свои значения в конфигурации.

### ⚡ Интуитивные автоимпорты

Любой файл с постфиксом `*.public.ts` / `*.public.vue` автоматически импортируется Nuxt'ом.

**Важно:** имя импортируемой сущности не зависит от пути к файлу — это сделано для чистоты структуры и удобства чтения.

### 📍 Файловый роутинг

Папка: `app/routes` — это корневой роутинг приложения. Всё внутри неё автоматически работает как страницы Nuxt.

## ⚙️ Конфигурация

В `nuxt.config.ts` можно настроить параметры модуля:

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

### Поля конфигурации:

| Поле                  | Тип        | Описание                                               |
| --------------------- | ---------- | ------------------------------------------------------ |
| `rootDir`             | `string`   | Корневая директория проекта                            |
| `autoImportTSSuffix`  | `string`   | Суффикс, делающий TS-файлы автоимпортируемыми          |
| `autoImportVueSuffix` | `string`   | Суффикс для автоимпорта Vue-компонентов                |
| `layers`              | `string[]` | Слои FSD. Можно расширять, изменять или переопределять |

---
