export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
~~这是要被删除的内容。~~

<pre>
  <b>Input: </b>1 2 3 4{'\n'}
  <b>Output: </b>"366300745"{'\n'}
</pre>  
  Input:1 2 3 4  
    Output: "366300745"  
  ``Use `code` in your Markdown file.``
    
:::tip
 Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](*).
:::

<!-- Prettier doesn't change this -->
:::note

Hello world

:::

<!-- Prettier changes this -->
:::note
Hello world
:::

<!-- to this -->
::: note Hello world:::

:::::info Parent

Parent content

::::danger Child

Child content

:::tip Deep Child

Deep child content

:::

::::

:::::

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

### Hello World {#my-explicit-id}

import TOCInline from '@theme/TOCInline';

<TOCInline
  // Only show h2 and h4 headings
  toc={toc.filter((node) => node.level === 2 || node.level === 4)}
  minHeadingLevel={2}
  // Show h4 headings in addition to the default h2 and h3 headings
  maxHeadingLevel={4}
/>

Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
---

```c
02/23-11:41:27:101> STM32F103xF Flash 大小：768.00kb
```c
