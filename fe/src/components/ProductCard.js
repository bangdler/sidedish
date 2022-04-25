import {
  CardWrapper,
  CutPrice,
  Event,
  Price,
  PriceWrapper,
  StyledH2,
  StyledImg,
  StyledP,
  StyledWrapper,
} from './ProductCard.styled';

export function ProductCard({ product, size }) {
  return (
    <CardWrapper>
      <StyledImg src={product.src} size={size} />
      <StyledH2 size={size}>{product.title}</StyledH2>
      <CardContent content={product.content} size={size} />
      <PriceWrapper flex align="center">
        <CutPrice>{product.cutPrice}</CutPrice>
        <Price>{product.price}</Price>
      </PriceWrapper>
      <EventWrapper events={product.events} size={size} />
    </CardWrapper>
  );
}

function CardContent({ content, size }) {
  if (size === 'small') {
    return;
  }
  return <StyledP size={size}>{content}</StyledP>;
}

function EventWrapper({ events, size }) {
  if (size === 'small') {
    return;
  }
  if (!events) {
    return;
  }
  return (
    <StyledWrapper flex>
      {events.map((eventName, idx) => {
        return (
          <Event key={`${eventName}-${idx}`} flex align="center" justify="center" eventName={eventName}>
            {eventName}
          </Event>
        );
      })}
    </StyledWrapper>
  );
}
