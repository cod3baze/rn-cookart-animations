# Animations UseCse

## interpolate

- determina, com base em condições de Frame, qual vai ser o valor da variável que está sendo analisada.

  Frame: [0, 0.5, 1]
  Valor: [17, 40, 17]

  - Quando estiver em um frame vai retornar o valor combinado.

  - ex:

```ts
  const buttonBorderAnimated = useSharedValue(0);

  strokeWidth: interpolate(
    buttonBorderAnimated.value,
    [0, 0.5, 1],
    [17, 40, 17]
  ),
```

no exemplo acima, quando a variável **buttonBorderAnimated.value\*** estiver no **Frame [0]** vai retornar o **valor [17]**
