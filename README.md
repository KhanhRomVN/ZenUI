# ZenUI

Modern, flexible and customizable UI component library for React + Vite + Tailwind CSS projects.

[![npm version](https://img.shields.io/npm/v/@khanhromvn/zenui.svg)](https://www.npmjs.com/package/@khanhromvn/zenui)
[![license](https://img.shields.io/npm/l/@khanhromvn/zenui.svg)](https://github.com/KhanhRomVN/ZenUI/blob/main/LICENSE)

## 🚀 Features

- ⚡️ Built for React + Vite + Tailwind CSS
- 🎨 Highly customizable with extensive props
- 🎭 Beautiful animations powered by Framer Motion
- 📦 Tree-shakeable - import only what you need
- 💪 Full TypeScript support
- 🎯 Zero external CSS required

## 📦 Installation

```bash
npm install @khanhromvn/zenui framer-motion lucide-react
# or
yarn add @khanhromvn/zenui framer-motion lucide-react
# or
pnpm add @khanhromvn/zenui framer-motion lucide-react
```

**Note:** ZenUI requires `framer-motion` and `lucide-react` as peer dependencies.

## 🎯 Requirements

- React >= 18.0.0
- Tailwind CSS >= 3.0.0
- Vite (recommended)

## 🔧 Setup

Make sure you have Tailwind CSS configured in your project. If not, follow the [official guide](https://tailwindcss.com/docs/guides/vite).

## 📖 Usage

### Drawer Component

```jsx
import { Drawer } from '@khanhromvn/zenui';
// or
import Drawer from '@khanhromvn/zenui/Drawer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Drawer
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Drawer"
        subtitle="This is a subtitle"
        direction="right"
        width="400px"
      >
        <div style={{ padding: '1.5rem' }}>
          Your content here
        </div>
      </Drawer>
    </>
  );
}
```

### Props

#### Core Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ✅ | - | Controls drawer visibility |
| `onClose` | `() => void` | ✅ | - | Callback when drawer closes |
| `children` | `ReactNode` | ✅ | - | Drawer content |

#### Basic Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Drawer title |
| `subtitle` | `string` | - | Drawer subtitle |
| `direction` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | Opening direction |
| `headerActions` | `ReactNode` | - | Custom header actions |
| `footerActions` | `ReactNode` | - | Footer action buttons |
| `className` | `string` | `''` | Custom CSS class |

#### Visibility & Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hideHeader` | `boolean` | `false` | Hide header section |
| `showCloseButton` | `boolean` | `true` | Show close button |
| `closeOnOverlayClick` | `boolean` | `true` | Close on overlay click |
| `overlayOpacity` | `number` | `0.5` | Overlay opacity (0-1) |
| `enableBlur` | `boolean` | `false` | Enable backdrop blur |

#### Animation

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animationType` | `'slide' \| 'scale' \| 'fade' \| 'bounce' \| 'elastic'` | `'slide'` | Animation type |

#### Dimensions

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string \| number` | `'25%'` | Drawer width (for left/right) |
| `height` | `string \| number` | `'25%'` | Drawer height (for top/bottom) |
| `marginLeft` | `number` | `0` | Left margin in pixels |
| `marginRight` | `number` | `0` | Right margin in pixels |
| `marginTop` | `number` | `0` | Top margin in pixels |
| `marginBottom` | `number` | `0` | Bottom margin in pixels |

#### Advanced Styling

| Prop | Type | Description |
|------|------|-------------|
| `padding` | `DrawerSpacing` | Custom padding |
| `margin` | `DrawerSpacing` | Custom margin |
| `border` | `DrawerBorder` | Border styling |
| `shadow` | `DrawerShadow \| DrawerShadow[]` | Shadow effects |
| `opacity` | `number` | Drawer opacity |
| `backdropBlur` | `string \| number` | Backdrop blur amount |
| `backgroundColor` | `string` | Background color |

#### Section-Specific Styling

| Prop | Type | Description |
|------|------|-------------|
| `headerBackgroundColor` | `string` | Header background |
| `bodyBackgroundColor` | `string` | Body background |
| `footerBackgroundColor` | `string` | Footer background |
| `headerBorder` | `DrawerSectionBorder` | Header border |
| `footerBorder` | `DrawerSectionBorder` | Footer border |

### Advanced Examples

#### Custom Width with Fractions

```jsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  width="1/2"  // 50% width
  direction="right"
>
  {/* Content */}
</Drawer>
```

#### Full Height Drawer from Bottom

```jsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  direction="bottom"
  height="full"
>
  {/* Content */}
</Drawer>
```

#### Drawer with Custom Animations

```jsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  animationType="elastic"
  enableBlur={true}
>
  {/* Content */}
</Drawer>
```

#### Drawer with Footer Actions

```jsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  title="Confirm Action"
  footerActions={
    <>
      <button onClick={onClose}>Cancel</button>
      <button onClick={handleConfirm}>Confirm</button>
    </>
  }
>
  {/* Content */}
</Drawer>
```

#### Drawer with Custom Styling

```jsx
<Drawer
  isOpen={isOpen}
  onClose={onClose}
  backgroundColor="#f9fafb"
  headerBackgroundColor="#ffffff"
  shadow={{
    offsetX: 0,
    offsetY: 4,
    blur: 16,
    spread: 0,
    color: "rgba(0, 0, 0, 0.1)"
  }}
  border={{
    width: { all: 1 },
    style: "solid",
    color: "#e5e7eb",
    radius: { all: 8 }
  }}
>
  {/* Content */}
</Drawer>
```

## 📘 Type Definitions

All components are fully typed with TypeScript. Import types as needed:

```typescript
import type {
  DrawerProps,
  DrawerDirection,
  DrawerAnimationType,
  DrawerSpacing,
  DrawerBorder,
  DrawerShadow
} from '@khanhromvn/zenui';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT © [KhanhRomVN](https://github.com/KhanhRomVN)

## 📧 Contact

- Email: khanhromvn@gmail.com
- GitHub: [@KhanhRomVN](https://github.com/KhanhRomVN)
- Repository: [https://github.com/KhanhRomVN/ZenUI](https://github.com/KhanhRomVN/ZenUI)

## 🗺️ Roadmap

- [ ] More components (Modal, Tooltip, Dropdown, etc.)
- [ ] Dark mode support
- [ ] More animation presets
- [ ] Storybook documentation
- [ ] Accessibility improvements

---

Made with ❤️ by KhanhRomVN