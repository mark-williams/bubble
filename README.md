# Bubbles

Just a tiny little application that will show a bubble sort in progress. Its real use will be a playground for, initially, _styled components_.

While not the focus of this exercise, I've used a bubble sort as I wanted to easily see its progress in operation, this is much easier with the bubble sort as it's iterative rather than making use of recursion like, say, _quicksort_.

### Styled Components
Amended the traditional css approach to styling to have a look at styled components. So, for example, the _SortItem_ component was previously styled using a CSS class, with subsequent overriding of the background colour (as this is generated dependent on the value of the item being display) as follows:

```javascript
const getItemStyle = (item) => {
  const color = (item * 20) % 360;
  return {
    backgroundColor: `hsl(${color}, 40%, 50%)`,
  };
};

const SortItem = ({ item }) => (
  <div className="sortItem" style={getItemStyle(item)}>{item}</div>
);
```

becomes

```javascript
const getItemBackgroundColor = (n) => {
  const color = (n * 20) % 360;
  return `hsl(${color}, 40%, 50%)`;
};

const StyledItem = styled.div`
 width: 50px;
  border: solid 1px #222;
  text-align: center;
  padding: 0.8em 1em;
  margin: 0.1em;
  background-color: ${props => getItemBackgroundColor(props.item)};
  color: #fff;
`;

const SortItem = props => (
  <StyledItem {...props}>{props.item}</StyledItem>
);
```

According to the creator of styled components, Max Stoiber:

> The basic idea of styled-components is to enforce best practices by removing the mapping between styles and components.

This seems strange at first, as CSS is there to _decouple_ styling and markup, but in practice this can become unwieldly and confused. 