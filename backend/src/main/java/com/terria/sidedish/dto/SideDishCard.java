package com.terria.sidedish.dto;

import com.terria.sidedish.domain.DiscountEvent;
import com.terria.sidedish.domain.entity.reference.SideDishImage;
import com.terria.sidedish.domain.entity.reference.SideDish;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class SideDishCard {

    private long sideDishId;
    private String imageUrl;
    private String name;
    private String description;
    private int disCountPrice;
    private int price;
    private String shippingInfo;
    private List<EventResponse> discountEvents;

    public static SideDishCard from(SideDish sideDish,
                                    SideDishImage sideDishImage,
                                    List<DiscountEvent> discountEvents) {

        double totalDiscountRate = discountEvents.stream()
                .mapToDouble(DiscountEvent::getDiscountRate)
                .sum();

        return new SideDishCard(
                sideDish.getId(),
                sideDishImage.getImageUrl(),
                sideDish.getName(),
                sideDish.getDescription(),
                (int) (sideDish.getPrice() * (1.0 - totalDiscountRate)) / 100 * 100,
                sideDish.getPrice(),
                sideDish.getShippingInfo(),
                discountEvents.stream().map(EventResponse::from).collect(Collectors.toList()) //
        );
    }

    @AllArgsConstructor
    static class EventResponse {

        private long id;
        private String title;

        public static EventResponse from(DiscountEvent discountEvent) {
            return new EventResponse(discountEvent.getId(), discountEvent.getTitle());
        }
    }
}
