---
sidebar_position: 2
---

# Custom Themes

Panoramica has support for custom themes. There are 4 different
themes that users can choose from out of the box:

- Panoramica Light
- Panoramica Dark
- White Lotus
- Black Lotus

Themes are defined in `src/configuration/themes.js`. A theme object looks like

```js
{
  name: "Panoramica Dark",
  bodyTheme: "panoramica-dark",
  dockviewTheme: "dockview-theme-dark",
  tailwindTheme: "dark",
}
```

- The `name` is shown to the user.
- The `bodyTheme` class is placed on the `<body>`
- The `dockviewTheme` class is provided to configure Dockview
- The `tailwindTheme` can be omitted or `dark` for dark themes

## Create a theme

To create a theme, create a new CSS file in `styles/themes`.
See `panoramica-dark.css` for an example. As a minimum, specify
values for the three colors, a background color for the body,
and a default text color.

```css
/* a dark, panoramic theme */
.panoramica-dark {
  --pan-primary-color: #d84c5a;
  --pan-secondary-color: #3c54b3;
  --pan-tertiary-color: #c354bf;

  background-color: theme("colors.gray.900");
  color: theme("colors.gray.200");
}
```

You can use colors from the default Tailwind palette with the `theme` directive
or manually provide colors in any format.

The `primary`, `secondary`, and `tertiary` colors will be applied to
elements of the UI. These colors are registered with Tailwind and used
as normal Tailwind colors.

If you would like to change colors like grays that are not primary/secondary/tertiary, you can define CSS variables and add them to `tailwind.config.js`
under `theme/extend/colors`.

If you would like to change Dockview variables in your custom theme,
you can add another block to your custom theme like this. In this example,
`black-lotus` is the `bodyTheme` value of the theme.

```css
.black-lotus .dockview-theme-dark {
  --dv-group-view-background-color: #f2f5ee;
}
```
