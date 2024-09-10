export enum StatusEnum {
  ACTIVE = 'active',
  DRAFT = 'draft',
  ARCHIVED = 'archived'
}

/* Los enums son muy buenos para no hacer uso de strings directamente
   en la logica de nuestro codigo. Y de esta manera hacer el codigo mas
  seguro y legible */

  const isActive = (status: StatusEnum): boolean => {
    return status === StatusEnum.ACTIVE;
  }

  isActive(StatusEnum.ACTIVE);
