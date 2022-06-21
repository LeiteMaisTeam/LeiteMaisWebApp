import {
  Flex,
  Grid,
  GridItem,
  Skeleton,
  Text,
  Tooltip,
  useTheme
} from '@chakra-ui/react'

export function LtmReactiveGrid({
  loading,
  config,
  items,
  itemKey,
  emptyMessage,
  templateColumns,
  gap = 3
}) {
  const theme = useTheme()

  const TextOrElement = ({ child }) => {
    if (typeof child === 'string') {
      return (
        <div>
          <Text fontWeight={400}>{child}</Text>
        </div>
      )
    }

    return <>{child}</>
  }

  return (
    <Flex flexDirection="column" width="100%" borderRadius={8}>
      {loading ? (
        <Skeleton height="150px" count={5} />
      ) : (
        <>
          <Grid
            templateColumns={
              templateColumns
                ? templateColumns
                : `repeat(${config.length}, 1fr)`
            }
            gap={gap}
            borderRadius={8}
            padding={4}
            background="#FFFFFF"
            fontWeight={700}
            color="gray.500"
          >
            {config.map((itemConfig, index) => (
              <GridItem key={index} colSpan={1}>
                <Tooltip label={itemConfig.labelTooltip}>
                  <Text>{itemConfig.label}</Text>
                </Tooltip>
              </GridItem>
            ))}
          </Grid>
          {items.length ? (
            items.map((item, index) => (
              <Grid
                key={itemKey(item)}
                templateColumns={
                  templateColumns
                    ? templateColumns
                    : `repeat(${config.length}, 1fr)`
                }
                gap={gap}
                borderRadius={8}
                padding={4}
                border={`1px solid ${theme.colors.gray[300]}`}
                overflow="hidden"
                mb={2}
                background={index % 2 !== 0 && '#FFFFFF'}
              >
                {config.map((itemConfig, index) => (
                  <GridItem key={index} colSpan={1}>
                    <TextOrElement
                      child={itemConfig.element(item)}
                      elementTooltip={
                        itemConfig.elementTooltip
                          ? itemConfig.elementTooltip(item)
                          : null
                      }
                    />
                  </GridItem>
                ))}
              </Grid>
            ))
          ) : (
            <Text mt="30px">{emptyMessage}</Text>
          )}
        </>
      )}
    </Flex>
  )
}
