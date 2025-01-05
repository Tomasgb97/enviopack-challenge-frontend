export function getCheckoutMessage(iSuccess: boolean | null): string {
  if (!iSuccess) {
    return 'Ocurrió un error con la compra, revisá que el importe no supere el credito disponible en tu cuenta.';
  } else {
    return 'La compra se realizó con éxito';
  }
}
