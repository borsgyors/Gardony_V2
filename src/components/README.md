# Gárdony Senior-Friendly UI Component Library

## Overview

A comprehensive, accessible UI component library designed specifically for the Gárdony municipal website, featuring:

- **Lake Velence-themed color palette** with blues, greens, and sand tones
- **Senior-friendly design** with large text (18px base) and high contrast
- **WCAG 2.1 AA compliant** with proper contrast ratios and accessibility features
- **Large touch targets** (minimum 44x44px) for easy interaction
- **Keyboard navigation** support with clear focus indicators

## Color Palette

### Primary Colors
- **Lake Blue**: `#2C7BA0` - Primary actions and links
- **Lake Blue Deep**: `#1A4D6B` - Hover states and emphasis
- **Lake Blue Light**: `#4A9BC7` - Light backgrounds and accents

### Secondary Colors
- **Lake Green**: `#3D8B7C` - Secondary actions
- **Lake Teal**: `#2D7C6E` - Hover states
- **Lake Green Light**: `#5FA99A` - Light backgrounds

### Accent Colors
- **Sand**: `#E8D4B8` - Warm accents
- **Sand Dark**: `#D4C4A8` - Darker accents

### Semantic Colors
- **Success**: `#2D8659` (4.5:1 contrast)
- **Warning**: `#F59E0B` (4.5:1 contrast)
- **Destructive**: `#DC2626` (4.5:1 contrast)
- **Info**: `#2C7BA0` (4.5:1 contrast)

## Typography

### Font Families
- **Headings**: Inter (400, 500, 600, 700)
- **Body**: DM Sans (400, 500, 700)

### Font Sizes
- **Base**: 18px (senior-friendly)
- **Large**: 20px
- **XL**: 24px
- **2XL**: 30px
- **3XL**: 36px
- **4XL**: 48px

### Line Heights
- **Tight**: 1.4
- **Normal**: 1.6
- **Relaxed**: 1.7-1.8

## Components

### Button
Large, touch-friendly buttons with multiple variants:
- `default` - Primary lake blue
- `secondary` - Lake green
- `outline` - Bordered with transparent background
- `ghost` - No background, text only
- `destructive` - Red for dangerous actions
- `success` - Green for positive actions

Sizes: `sm` (48px), `default` (56px), `lg` (64px), `icon` (56px)

### Card
Container component with header, content, and footer sections.
- 2px borders for visibility
- Rounded corners (12px)
- Shadow on hover
- 32px padding for spacious layout

### Input & Textarea
Large form inputs optimized for seniors:
- 56px height for inputs
- 2px borders with high contrast
- Large 18px text
- 3px focus rings in lake blue
- Clear placeholder text

### Alert
High-contrast alerts for important messages:
- `info` - Blue background
- `success` - Green background
- `warning` - Yellow background
- `destructive` - Red background

### Badge
Status indicators and labels:
- 16px base font size
- 2px borders
- High contrast colors
- Multiple variants

### IconCard
Large icon cards for navigation:
- 80px icon container
- Center-aligned layout
- Hover effects with color transition
- Supports links

### Table
Accessible data tables:
- Large text (18px)
- 2px borders
- Hover row highlights
- Spacious padding (24px)

## Accessibility Features

### WCAG 2.1 AA Compliance
✓ **Contrast Ratios**
- Text: 4.5:1 minimum
- Large text (24px+): 3:1 minimum
- UI components: 3:1 minimum

✓ **Touch Targets**
- Minimum 44x44px for all interactive elements
- Adequate spacing between targets

✓ **Focus Indicators**
- 3px solid outlines in lake blue
- 3px offset for visibility
- Visible on all interactive elements

✓ **Keyboard Navigation**
- Logical tab order
- No keyboard traps
- Skip links available

✓ **Screen Reader Support**
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images

### Senior-Friendly Features
- Large base font size (18px)
- High contrast colors
- Clear visual hierarchy
- Generous spacing
- Simple, intuitive interactions
- Minimal cognitive load

## Usage Examples

### Button
```tsx
import { Button } from "@/components/ui/button"

<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button size="lg">Large Button</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### Form
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div className="space-y-3">
  <Label htmlFor="name">Full Name</Label>
  <Input id="name" placeholder="Enter your name" />
</div>
```

### IconCard
```tsx
import { IconCard } from "@/components/ui/icon-card"
import { Waves } from "lucide-react"

<IconCard
  icon={<Waves className="w-10 h-10" />}
  title="Beach Access"
  description="Lake Velence beaches"
  href="/beaches"
/>
```

## Design Tokens

All design tokens are defined in `globals.css` using CSS custom properties:

```css
--color-lake-blue: #2C7BA0;
--color-lake-green: #3D8B7C;
--font-size-base: 18px;
--radius-lg: 0.75rem;
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Screen readers (NVDA, JAWS, VoiceOver)

## License

Designed for Gárdony Municipality © 2024
