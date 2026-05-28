# OmniWatch Components

## WatchFrame
A reusable smartwatch shell wrapper that contains the watch screen content.

### Props

| Prop | Type | Description |
|------|------|-------------|
| children | JSX | The content rendered inside the watch frame |

### Example

```jsx
<WatchFrame>
  <TimeDisplay />
</WatchFrame>
```

---

## TimeDisplay
Displays the current time and AM/PM period.

### Props

| Prop | Type | Description |
|------|------|-------------|
| time | string | The main time display |
| period | string | Displays whether time is AM or PM |

### Example

```jsx
<TimeDisplay
  time="10:42"
  period="AM"
/>
```

---

## StatRing
A circular progress indicator for fitness statistics.

### Props

| Prop | Type | Description |
|------|------|-------------|
| label | string | Name of the stat |
| value | string | Current displayed value |
| target | string | Goal value |
| color | string | Tailwind border color class |

### Example

```jsx
<StatRing
  label="Steps"
  value="8,432"
  target="10,000"
  color="border-[#B7C4CF]"
/>
```

---

## StopwatchWidget
Displays a smartwatch stopwatch section with lap times.

### Props

This component currently does not accept props.

### Example

```jsx
<StopwatchWidget />
```