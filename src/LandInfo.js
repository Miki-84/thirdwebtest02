import * as React from 'react';
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { Web3Button } from "@thirdweb-dev/react";


function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function BasicStatistics({ mainTitle, showInfo }) {

    return (
        <>

            {showInfo ? (
                <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                    <chakra.h1
                        textAlign={'center'}
                        fontSize={'4xl'}
                        py={10}
                        fontWeight={'bold'}>
                        Plot Land #{mainTitle}
                    </chakra.h1>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
                        <StatsCard
                            title={'Users'}
                            stat={'5,000'}
                            icon={<BsPerson size={'3em'} />}
                        />
                        <StatsCard
                            title={'Servers'}
                            stat={'1,000'}
                            icon={<FiServer size={'3em'} />}
                        />
                        <StatsCard
                            title={'Datacenters'}
                            stat={'7'}
                            icon={<GoLocation size={'3em'} />}
                        />
                        <Web3Button
                            contractAddress="0xcD6fFa6362b161a8B1F8698Af6E5e3531Ffc03D6"
                            action={async (contract) => contract.call("totalSupply")}
                        >
                            Buy Land Plot
                        </Web3Button>
                    </SimpleGrid>
                </Box>

            ) : (
                <h3> Select a Land plot in the map</h3>
            )}
        </>

    );
}  