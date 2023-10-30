import type { Product, ProductByService } from '@/types';
import Router, { useRouter } from 'next/router';
import cn from 'classnames';
import { motion } from 'framer-motion';
import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useModalAction } from '@/components/modal-views/context';
import routes from '@/config/routes';
import usePrice from '@/lib/hooks/use-price';
import { PreviewIcon } from '@/components/icons/preview-icon';
import { DetailsIcon } from '@/components/icons/details-icon';
import placeholder from '@/assets/images/placeholders/netflix.jpg';
import { useGridSwitcher } from '@/components/product/grid-switcher';
import { fadeInBottomWithScaleX } from '@/lib/framer-motion/fade-in-bottom';
import { isFree } from '@/lib/is-free';
import { useTranslation } from 'next-i18next';
import { MouseEventHandler, useEffect } from 'react';
import { useProduct } from './lib/product.context';

export default function Card({ product }: { product: ProductByService }) {
  const { name, image, price } = product ?? {};
  const { updateProduct, productByService } = useProduct();
  const router = useRouter();
  // const { openModal } = useModalAction();
  // const { isGridCompact } = useGridSwitcher();
  // const { price, basePrice } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price,
  //   baseAmount: product.price,
  // });
  // const goToDetailsPage = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.stopPropagation();
  //   Router.push(routes.productUrl(slug));
  // };
  const { t } = useTranslation('common');
  // const isFreeItem = isFree(product?.sale_price ?? product?.price);
  const isFreeItem = isFree(product?.price);

  const purchaseProduct = (product: ProductByService) => {
    console.log(product);
    updateProduct(product);
    router.push('/checkout');
  };
  // useEffect(() => {
  //   if (productByService === undefined) return;
  //   console.log(productByService);
  //   router.push('/checkout');
  // }, [productByService]);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ opacity: 0.8, scale: 0.95 }}
      transition={{ ease: 'easeOut', duration: 0.1 }}
      title={name}
      onClick={() => purchaseProduct(product)}
    >
      <div className="group relative flex aspect-[3/2] w-full justify-center overflow-hidden">
        <Image
          alt={name}
          layout="fill"
          quality={100}
          objectFit="cover"
          src={placeholder /*image?.thumbnail ?? placeholder*/}
          className="bg-light-500 dark:bg-dark-400"
        />
        {/* <div
          onClick={() => openModal('PRODUCT_DETAILS', { slug })}
          className="absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center gap-9 bg-dark/60 p-4 opacity-0 backdrop-blur-sm transition-all group-hover:gap-5 group-hover:opacity-100 dark:bg-dark/70"
        >
          <button
            className={cn(
              'text-center font-medium text-light',
              isGridCompact ? 'text-xs' : 'text-13px'
            )}
          >
            <div
              className={cn(
                'mb-2 flex items-center justify-center rounded-full bg-dark-800 text-light backdrop-blur-sm transition-all hover:bg-brand',
                isGridCompact ? 'h-11 w-11' : 'h-[50px] w-[50px]'
              )}
            >
              <PreviewIcon
                className={cn(isGridCompact ? 'h-4 w-4' : 'h-5 w-5')}
              />
            </div>
            {t('text-preview')}
          </button>
          <button
            onClick={goToDetailsPage}
            className={cn(
              'relative z-[11] text-center font-medium text-light',
              isGridCompact ? 'text-xs' : 'text-13px'
            )}
          >
            <div
              className={cn(
                'mb-2 flex items-center justify-center rounded-full bg-dark-800 text-light backdrop-blur-sm transition-all hover:bg-brand',
                isGridCompact ? 'h-11 w-11' : 'h-[50px] w-[50px]'
              )}
            >
              <DetailsIcon
                className={cn(isGridCompact ? 'h-4 w-4' : 'h-5 w-5')}
              />
            </div>
            {t('text-details')}
          </button>
        </div> */}
      </div>
      <div className="flex items-start justify-between pt-3.5">
        {/* <div className="relative flex h-8 w-8 flex-shrink-0 4xl:h-9 4xl:w-9">
          <Image
            alt={shop?.name}
            layout="fill"
            quality={100}
            objectFit="cover"
            src={shop?.logo?.thumbnail ?? placeholder}
            className="rounded-full bg-light-500 dark:bg-dark-400"
          />
        </div> */}
        <div className="-mt-[1px] flex flex-col truncate ltr:mr-auto ltr:pl-2.5 rtl:ml-auto rtl:pr-2.5 rtl:text-right">
          <h3
            title={name}
            className="mb-0.5 truncate font-medium text-dark-100 dark:text-light"
          >
            {
              name /* {<AnchorLink href={routes.productUrl(name)}>{name}</AnchorLink>} */
            }
          </h3>
          {/* <AnchorLink
            href={routes.shopUrl(name)}
            className="font-medium text-light-base hover:text-brand dark:text-dark-800 dark:hover:text-brand"
          >
            {name}
          </AnchorLink> */}
        </div>

        <div className="flex flex-shrink-0 flex-col items-end pl-2.5">
          <span className="rounded-2xl bg-light-500 px-1.5 py-0.5 text-13px font-semibold uppercase text-brand dark:bg-dark-300 dark:text-brand-dark">
            Bs. {isFreeItem ? t('text-free') : price}
          </span>
          {/* {!isFreeItem && price && (
            <del className="px-1 text-13px font-medium text-dark-900 dark:text-dark-700">
              {price}
            </del>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
