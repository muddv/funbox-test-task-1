import { useState } from 'react';
import classResolver from './classResolver';

function ProductCard({ productType, productTypePortionNumber, productTypeGift, productAdditionalInformation, productWeight, productDescription, cardDisabled = 0 }) {
    const [isSelected, setIsSelected] = useState(false);
    const toggleSelected = () => {
        cardDisabled === 1 ? null : setIsSelected(!isSelected);
    }

    const [hoverAllowed, setHoverAllowed] = useState(false);
    const toggleHover = () => {
        setHoverAllowed(!hoverAllowed);
    }

    return (
        <div className="product-card__container">
            <div
                className={"product-card__border " + classResolver(isSelected, hoverAllowed, cardDisabled)}
                onClick={toggleSelected}
                onMouseLeave={isSelected && !hoverAllowed ? toggleHover : null}>
                <div className="product-card__content"
                    onClick={hoverAllowed ? toggleSelected && toggleHover : toggleSelected}
                >
                    <div className="product-card__text">
                        <p className={isSelected && hoverAllowed ? "product-card__text_header-default-hidden" : "product-card__text_header-default"}>Сказочное заморское яство</p>
                        <p className={isSelected && hoverAllowed ? "product-card__text_header-selected-hover" : "product-card__text_header-selected-hidden"}>Котэ не одобряет?</p>
                        <h1 className="product-card__text_product-title">Нямушка</h1>
                        <h2 className="product-card__text_product-type">{productType}</h2>
                        <p className="product-card__text_portion-number"><b>{productTypePortionNumber}</b> порций</p>
                        <p className="product-card__text_product-type_gift">{productTypeGift} в подарок</p>
                        <p className="product-card__text_additional">{productAdditionalInformation}</p>
                    </div>
                    <div className="product-card__image">
                        <img
                            src="./src/assets/images/product-card-image.png"
                            alt="Кот, который ждёт Нямушку"
                        />
                    </div>
                    <div className="product-card__weight">
                        <p className="product-card__weight_number">{productWeight}</p>
                        <p className="product-card__weight_unit">{"\n"}{"\n"}{"\n"}КГ</p>
                    </div>
                </div>
            </div>
            <div className={cardDisabled ? "product-card__description-hidden" : "product-card__description"}>
                {isSelected ? productDescription : "Чего сидишь? Порадуй котэ,"}&nbsp;
                <div
                    className={isSelected ? "product-card__description_button-hidden" : "product-card__description_button"}
                    onClick={toggleSelected}
                    onMouseLeave={toggleHover}>
                    купи
                </div>
            </div>
            <div className={cardDisabled ? "product-card__description_disabled" : "product-card__description_disabled-hidden"}>Печалька, {productType} закончился.</div>
        </div>
    )
}

export default ProductCard