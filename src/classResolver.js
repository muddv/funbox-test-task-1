function classResolver(isSelected, hoverAllowed, cardDisabled) {
    if (cardDisabled === 1) {
        return ("product-card__border-disabled")
    }

    if (isSelected && !hoverAllowed) {
        return ("product-card__border-selected-no-hover")
    }

    if (isSelected && hoverAllowed) {
        return "product-card__border-selected-hover"
    }

    return ("product-card__border-default")
}

export default classResolver