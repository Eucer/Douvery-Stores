import { component$, useStylesScoped$ } from '@builder.io/qwik';
import style from './product_data_no_edit.css?inline';
import { TextCL } from '~/components/textCL/textCL';
import { formatDateWithMinutes } from '~/fuctions/date/format-date';
export const Product_data_no_edit = component$(({ productStore }: any) => {
  useStylesScoped$(style);
  return (
    <div class="crtr-charac-bs">
      <div class="crrts-title">
        <div class="ofrs">
          <hs-sr3>Información del Producto</hs-sr3>
        </div>

        <p class="ps-sr1 ">
          Datos no editables.{' '}
          <a href="/" class="text_consult">
            Consultar aqui.
          </a>
        </p>
      </div>
      <div>
        <ul>
          <li>
            <strong>Dui:</strong> {productStore.productDui}
          </li>
          <li>
            <strong>Categoria:</strong> {productStore.productCategory}
          </li>
          <li>
            <strong>Sub Categoria:</strong> {productStore.productSubCategory}
          </li>
          <li>
            <strong>Condicion:</strong>{' '}
            <TextCL text={productStore.productCondition} />
          </li>
          <li>
            <strong>GTIN:</strong> {productStore.productGTIN}
          </li>
          <li>
            <strong>Crado por:</strong> {productStore.productUploaded_by}
          </li>
          <li>
            <strong>Dia creado:</strong>{' '}
            {formatDateWithMinutes(productStore.productCreatedAt)}
          </li>{' '}
          <li>
            <strong>Ultima actualizacion:</strong>{' '}
            {formatDateWithMinutes(productStore.productUpdatedAt)}
          </li>
        </ul>
      </div>
    </div>
  );
});
