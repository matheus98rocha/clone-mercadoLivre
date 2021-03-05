import styled, { css } from 'styled-components';
import {
    HiOutlineLocationMarker,
    HiOutlineChatAlt2,
    HiOutlineClock,
} from 'react-icons/hi';

export const Container = styled.div``;

export const Title = styled.div``;

export const LocationCard = styled.div``;

const iconCSS = css`
    width:30px;
    height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`${iconCSS}`;

export const ReputationCard = styled.div``;

export const ReputationThermometer = styled.div``;

export const SupportIcon = styled(HiOutlineChatAlt2)`${iconCSS}`;

export const ClockIcon = styled(HiOutlineClock)`${iconCSS}`;

export const More = styled.div`${iconCSS}`;

