import React from 'react';
import {
  Typography,
  Divider,
  Stack,
  ListItem,
  List,
  Box,
  Button,
  Card,
  Grid,
  Chip,
} from '@mui/material';

export default function MembershipPlans() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px',
        backgroundColor: '#f0f8ff',
        ' @media(max-width:479px)': { padding: '10px' },
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rowGap: '30px',
          maxWidth: '100%',
          width: '100%',
          padding: '20px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          ' @media(max-width:479px)': { padding: '10px' },
        }}>
        <Typography
          variant="p"
          sx={{
            fontFamily: 'var(--theme-font-family)',
            color: 'var(--base-medium-dark)',
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            ' @media(max-width:991px)': { fontSize: '26px' },
            ' @media(max-width:479px)': { fontSize: '21px' },
          }}>
          Subscription
        </Typography>
        <Grid
          container
          rowSpacing={'25px'}
          columnSpacing={'25px'}
          sx={{ width: '100%' }}>
          <Grid item xs={12.0} sm={6.0} md={4.0} lg={12.0} xl={12.0}>
            <Card
              sx={{
                borderRadius: 'calc(8px*0.5)',
                boxShadow: '0px 0px calc(5px * 0.5) gray',
                fontFamily: 'var(--theme-font-family)',
                display: 'flex',
                columnGap: '20px',
                alignItems: 'center',
                boxSizing: 'border-box',
                width: '100%',
                padding: '20px',
                height: '100%',
                ' @media(max-width:991px)': {
                  justifyContent: 'center',
                  flexDirection: 'column',
                  rowGap: '20px',
                },
                ' @media(max-width:479px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  rowGap: '20px',
                },
              }}>
              <Stack sx={{ alignItems: 'center', width: '100%' }} spacing="0px">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: 'var(--theme-font-family)',
                    color: 'var(--theme-color-base)',
                  }}>
                  Free Account
                </Typography>
                <Divider
                  sx={{
                    margin: '8px 0',
                    color: '#dbdbdb',
                    border: 'none',
                    backgroundColor: '#e3e3e3ff',
                    height: '1px',
                    width: '90%',
                  }}
                  orientation="horizontal"></Divider>
                <Stack
                  sx={{ alignItems: 'center', width: '100%' }}
                  spacing="0px">
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--base-medium-dark)',
                      textAlign: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      ' @media(max-width:991px)': { fontSize: '26px' },
                      ' @media(max-width:479px)': { fontSize: '21px' },
                    }}>
                    Free
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base-dark)',
                      fontSize: '13px',
                    }}>
                    per month
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: '40px',
                  ' @media(max-width:991px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                  ' @media(max-width:479px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                }}>
                <Stack
                  sx={{
                    alignItems: 'flex-start',
                    width: '100%',
                    ' @media(max-width:479px)': {
                      justifyContent: 'center',
                      alignSelf: 'center',
                    },
                  }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    CONTENT
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_0527bb5c-3b38-4ae4-8a87-b8473008ab1f.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        First level
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_088ad567-648c-44e9-8bdf-ebafacca8bd5.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Learning Challenges
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_8ab2f1a0-b186-48b3-9d99-f4d48a948931.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Certificates of Completion
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_28c03368-ee0c-4cf0-a6d0-2e62d39e3685.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Premium Lectures
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_90c3a3db-a62e-4e85-b34e-ea263816433f.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Courses
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{
                    alignItems: 'flex-start',
                    width: '100%',
                    ' @media(max-width:479px)': { alignSelf: 'center' },
                  }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    FEATURES
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_bcf386d3-0752-474d-b0d9-1565ad0acb47.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Team Analytics
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_655dfdfa-9d6e-4da8-b155-48b8ca3933a1.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Professional Profile
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_bac58374-87e0-4790-87fd-ab79f024f14f.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Skill Tests
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_cb7df1f9-3cea-4647-93cb-a92f809a800a.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Board
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_47a8d328-dcf8-474a-939a-fe2b1a92ea44.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Personalized URL
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{
                    alignItems: 'flex-start',
                    width: '100%',
                    ' @media(max-width:479px)': { alignSelf: 'center' },
                  }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    ADDE EXTRAS
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_6cf1928b-a6d7-4eee-9091-e674e5dcdfaf.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Unlimited Seat
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_948d1839-b056-4ca5-aaf5-922114c17e83.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Postings
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_c65de449-2639-4f01-8213-f7937dc239c3.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Custom Invoices
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_068351a3-b64d-4d65-910a-f862c91f0edd.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Slack Community
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_42077562-b111-41b5-a73a-30865cb648c9.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Live Chat Support
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Box>
              <Button
                disableElevation
                variant="outline"
                sx={{
                  borderRadius: 'calc(8px*0.5)',
                  boxShadow:
                    '0px 0px calc(5px * 0.5) var(--theme-color-primary)',
                  border: '1px solid var(--theme-color-primary)',
                  color: 'var(--theme-color-primary)',
                  background: 'none',
                  fontFamily: 'var(--theme-font-family)',
                  '&:hover': { backgroundColor: 'none' },
                  gap: '8px',
                  textTransform: 'none',
                  height: 'fit-content',
                  whiteSpace: 'nowrap',
                  padding: '10px 25px',
                  fontSize: '15px',
                  ' @media(max-width:479px)': { alignSelf: 'center' },
                }}>
                Current Plan
              </Button>
            </Card>
          </Grid>
          <Grid
            item
            sx={{ overflow: 'visible' }}
            xs={12.0}
            sm={6.0}
            md={4.0}
            lg={12.0}
            xl={12.0}>
            <Card
              sx={{
                borderRadius: 'calc(8px*0.5)',
                boxShadow: '0px 0px calc(5px * 0.5) gray',
                fontFamily: 'var(--theme-font-family)',
                width: '100%',
                padding: '20px',
                border: '2px solid rgba(26,210,210,255)',
                display: 'flex',
                columnGap: '15px',
                alignItems: 'center',
                position: 'relative',
                boxSizing: 'border-box',
                overflow: 'visible',
                height: '100%',
                ' @media(max-width:991px)': {
                  justifyContent: 'center',
                  rowGap: '20px',
                  flexDirection: 'column',
                },
                ' @media(max-width:479px)': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  rowGap: '20px',
                },
              }}>
              <Stack
                sx={{
                  alignItems: 'center',
                  width: '100%',
                  ' @media(max-width:991px)': { marginTop: '16px' },
                }}
                spacing="0px">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: 'var(--theme-font-family)',
                    color: 'var(--base-medium-dark)',
                  }}>
                  Premium Subscription
                </Typography>
                <Divider
                  sx={{
                    margin: '8px 0',
                    color: '#dbdbdb',
                    border: 'none',
                    backgroundColor: '#e3e3e3ff',
                    height: '1px',
                    width: '90%',
                  }}
                  orientation="horizontal"></Divider>
                <Stack
                  sx={{ alignItems: 'center', width: '100%' }}
                  spacing="0px">
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--base-medium-dark)',
                      textAlign: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      ' @media(max-width:991px)': { fontSize: '26px' },
                      ' @media(max-width:479px)': { fontSize: '21px' },
                    }}>
                    $ 7
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base-dark)',
                      fontSize: '13px',
                    }}>
                    per month
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: '40px',
                  ' @media(max-width:991px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                  ' @media(max-width:479px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                }}>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    CONTENT
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_445703b5-2562-4c6e-b394-60867d5da94a.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        First level
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_c89ea782-b973-4d1e-8bc7-39f2076e795c.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Learning Challenges
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_a25305f9-b245-44d2-9249-8d28f91b35cf.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Certificates of Completion
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_574666b5-48f6-42a4-bdec-a51b77e5f303.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Premium Lectures
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: 'calc(6px*0.4)',
                          boxShadow:
                            '0px 0px calc(5px * 0) var(--primary-low-dark)',
                          border: 'none',
                          color: 'white',
                          background: 'var(--theme-color-primary-dark)',
                          fontFamily: 'var(--theme-font-family)',
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '3px 5px',
                            overflow: 'visible',
                          },
                          fontSize: '10px',
                          padding: '2px 4px',
                          whiteSpace: 'nowrap',
                        }}
                        avatar={<></>}
                        label={<>20% off</>}
                      />
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_b77c8565-1cdc-4077-a689-73b1969ca521.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Courses
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: 'calc(6px*0.4)',
                          boxShadow:
                            '0px 0px calc(5px * 0) var(--primary-low-dark)',
                          border: 'none',
                          color: 'white',
                          background: 'var(--theme-color-primary-dark)',
                          fontFamily: 'var(--theme-font-family)',
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '3px 5px',
                            overflow: 'visible',
                          },
                          fontSize: '10px',
                          padding: '2px 4px',
                          whiteSpace: 'nowrap',
                        }}
                        avatar={<></>}
                        label={<>20% off</>}
                      />
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    FEATURES
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_047924cc-2733-43e1-9fbd-bbef77570f11.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Team Analytics
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_e939cdc2-8047-4fc2-9b88-dbe646b82f7a.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Professional Profile
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_d06f1c8a-ced8-4eb9-b629-6a2af210b7ab.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Skill Tests
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_7f2d7caf-fd5c-44ea-9732-c8171c9e4fb3.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Board
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_6a3b0ff6-a226-4df5-b20c-7e42e8cfec3a.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Personalized URL
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    ADDE EXTRAS
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_c2c10e48-8d55-43bf-9b3b-9239737921a6.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Unlimited Seat
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_2d575e39-596a-4456-ae7f-2c985d83df18.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Postings
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_c40727dc-cc3e-4bb1-98b3-3ad0d05137aa.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Custom Invoices
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_b0789952-91cc-4f3a-bb8a-1c02bb6118a9.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Slack Community
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_923a0119-dac8-48f9-9de2-9fd1f91d161a.svg"
                        width="10px"
                        height="10px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Live Chat Support
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Box>
              <Button
                disableElevation
                variant="soft"
                sx={{
                  borderRadius: 'calc(8px*0.5)',
                  boxShadow: '0px 0px calc(5px * 0.5) var(--primary-low-dark)',
                  border: 'none',
                  color: 'white',
                  background: 'var(--primary-medium-dark)',
                  fontFamily: 'var(--theme-font-family)',
                  '&:hover': { backgroundColor: 'var(--primary-medium-dark)' },
                  gap: '8px',
                  textTransform: 'none',
                  height: 'fit-content',
                  whiteSpace: 'nowrap',
                  padding: '10px 25px',
                  fontSize: '15px',
                  ' @media(max-width:479px)': { alignSelf: 'center' },
                }}>
                Select Plan
              </Button>
              <Chip
                sx={{
                  borderRadius: 'calc(8px*0.5)',
                  boxShadow: '0px 0px calc(5px * 0.5) var(--primary-low-dark)',
                  border: 'none',
                  color: 'white',
                  background: 'var(--theme-color-primary-dark)',
                  fontFamily: 'var(--theme-font-family)',
                  height: 'auto',
                  '& .MuiChip-label': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '3px 5px',
                    overflow: 'visible',
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: '-2px',
                  top: '-10%',
                  width: '120px',
                  ' @media(max-width:991px)': { top: '-18px' },
                  ' @media(max-width:479px)': { top: '-18px' },
                }}
                avatar={<></>}
                label={<>Best Value</>}
              />
            </Card>
          </Grid>
          <Grid item xs={12.0} sm={6.0} md={4.0} lg={12.0} xl={12.0}>
            <Card
              sx={{
                borderRadius: 'calc(8px*0.5)',
                boxShadow: '0px 0px calc(5px * 0.5) gray',
                fontFamily: 'var(--theme-font-family)',
                display: 'flex',
                columnGap: '20px',
                alignItems: 'center',
                width: '100%',
                padding: '20px',
                height: '100%',
                boxSizing: 'border-box',
                ' @media(max-width:991px)': {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  rowGap: '20px',
                },
                ' @media(max-width:479px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  rowGap: '20px',
                },
              }}>
              <Stack
                sx={{
                  alignItems: 'center',
                  width: '100%',
                  ' @media(max-width:991px)': { marginTop: '16px' },
                }}
                spacing="0px">
                <Typography
                  variant="p"
                  sx={{
                    fontFamily: 'var(--theme-font-family)',
                    color: 'var(--base-medium-dark)',
                    fontWeight: '500',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>
                  Pro Subscription
                </Typography>
                <Divider
                  sx={{
                    margin: '8px 0',
                    color: '#dbdbdb',
                    border: 'none',
                    backgroundColor: '#e3e3e3ff',
                    height: '1px',
                    width: '90%',
                  }}
                  orientation="horizontal"></Divider>
                <Stack
                  sx={{ alignItems: 'center', width: '100%' }}
                  spacing="0px">
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--base-medium-dark)',
                      textAlign: 'center',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      ' @media(max-width:991px)': { fontSize: '26px' },
                      ' @media(max-width:479px)': { fontSize: '21px' },
                    }}>
                    $ 12
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base-dark)',
                      fontSize: '13px',
                    }}>
                    per month
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: 'flex',
                  columnGap: '40px',
                  ' @media(max-width:991px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                  ' @media(max-width:479px)': {
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    rowGap: '30px',
                  },
                }}>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    CONTENT
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_b2e0b4ec-a23f-414a-9fc4-f2b79c4cbf95.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        First level
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_cdc91783-9aef-410f-868d-b1f35e5e7774.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Learning Challenges
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_a5bc8d80-164f-4378-b1dd-5499a97b1b07.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Certificates of Completion
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_f6c8a72b-9788-4c56-9038-a7f4f5c2bac7.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Premium Lectures
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: 'calc(6px*0.4)',
                          boxShadow:
                            '0px 0px calc(5px * 0) var(--primary-low-dark)',
                          border: 'none',
                          color: 'white',
                          background: 'var(--theme-color-primary-dark)',
                          fontFamily: 'var(--theme-font-family)',
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '3px 5px',
                            overflow: 'visible',
                          },
                          fontSize: '10px',
                          padding: '2px 4px',
                          whiteSpace: 'nowrap',
                        }}
                        avatar={<></>}
                        label={<>40% off</>}
                      />
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '3px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_11566f58-fafb-424a-a3cc-a84ea0314628.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Courses
                      </Typography>
                      <Chip
                        sx={{
                          borderRadius: 'calc(6px*0.4)',
                          boxShadow:
                            '0px 0px calc(5px * 0) var(--primary-low-dark)',
                          border: 'none',
                          color: 'white',
                          background: 'var(--theme-color-primary-dark)',
                          fontFamily: 'var(--theme-font-family)',
                          height: 'auto',
                          '& .MuiChip-label': {
                            display: 'flex',
                            alignItems: 'center',
                            padding: '3px 5px',
                            overflow: 'visible',
                          },
                          fontSize: '10px',
                          padding: '2px 4px',
                          whiteSpace: 'nowrap',
                        }}
                        avatar={<></>}
                        label={<>40% off</>}
                      />
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    FEATURES
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_60c362e3-eba8-4e2a-a845-4dbbeeb6a22f.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Team Analytics
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_804129c7-9899-4d9a-be67-27c59f14bb02.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Professional Profile
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_b9a08aae-1f33-4919-8bcd-a1dd45560e08.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Skill Tests
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_ffbff045-525a-40d4-8159-42572809cd24.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Board
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_42d6534b-4c9a-4bb5-a5ef-5b6f35f9307a.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Personalized URL
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
                <Stack
                  sx={{ alignItems: 'flex-start', width: '100%' }}
                  spacing="10px">
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: 'var(--theme-font-family)',
                      color: 'var(--theme-color-base)',
                    }}>
                    ADDED EXTRAS
                  </Typography>
                  <List
                    sx={{
                      borderRadius: 'calc(8px*0)',
                      fontFamily: 'var(--theme-font-family)',
                    }}>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_748ea2bf-300d-448d-86ba-00250df757cf.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Unlimited Seat
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_8fd365a3-7175-48cb-af5c-3b45545304e4.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Job Postings
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_fbed82dd-b709-4b43-9693-fee1f2afd6a8.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Custom Invoices
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_89fe0962-c5df-4dd7-a00d-aa1e5b606382.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Slack Community
                      </Typography>
                    </ListItem>
                    <ListItem
                      disablePadding={true}
                      sx={{
                        marginBottom: '5px',
                        padding: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        columnGap: '10px',
                      }}>
                      <img
                        src="https://purecodestorageprod.blob.core.windows.net/images-svg/MembershipPlans_f7cfa587-31e7-4ac5-96bf-10a523aae536.svg"
                        style={{ minHeight: '10px', minWidth: '10px' }}
                        width="11px"
                        height="11px"
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'var(--theme-font-family)',
                          color: 'var(--base-medium-dark)',
                          whiteSpace: 'nowrap',
                        }}>
                        Live Chat Support
                      </Typography>
                    </ListItem>
                  </List>
                </Stack>
              </Box>
              <Button
                disableElevation
                variant="outline"
                sx={{
                  borderRadius: 'calc(8px*0.5)',
                  boxShadow:
                    '0px 0px calc(5px * 0.5) var(--theme-color-primary)',
                  border: '1px solid var(--theme-color-primary)',
                  color: 'var(--theme-color-primary)',
                  background: 'none',
                  fontFamily: 'var(--theme-font-family)',
                  '&:hover': { backgroundColor: 'none' },
                  gap: '8px',
                  textTransform: 'none',
                  height: 'fit-content',
                  whiteSpace: 'nowrap',
                  padding: '10px 25px',
                  fontSize: '15px',
                  ' @media(max-width:479px)': { alignSelf: 'center' },
                }}>
                Premium Plan
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
