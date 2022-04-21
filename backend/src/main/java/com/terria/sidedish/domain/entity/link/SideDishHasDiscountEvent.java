package com.terria.sidedish.domain.entity.link;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SideDishHasDiscountEvent {

    private long discountEventId;

    @Override
    public String toString() {
        return "SideDishHasDiscountEvent{" +
                "discountEventId=" + discountEventId +
                '}';
    }
}
