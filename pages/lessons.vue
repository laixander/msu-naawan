<template>
    <section class="container" style="margin: 0 auto; width: 100%; max-width: 1440px;">
        <a-space direction="vertical" size="middle" class="lessons">
            <a-typography-title :level="5">
                Interview Questions for UI/UX Designer
            </a-typography-title>

            <a-collapse v-model:activeKey="activeKey" accordion>
                <a-collapse-panel v-for="(faq, index) in faqs" :key="index" :header="faq.question">
                  <p>{{ faq.answer }}</p>
                </a-collapse-panel>
            </a-collapse>
        </a-space>
    </section>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const activeKey = ref([]);
    const faqs = ref([
        { 
            question: 'Can you walk us through your process for designing a user interface from initial concept to final product? How do you incorporate user feedback and usability testing throughout this process?',
            answer: 'Certainly! My process starts with thorough research and creating prototypes. I incorporate user feedback by regularly seeking input from stakeholders and conducting usability testing sessions with representative users. Based on the insights gathered, I iterate on the design until we achieve a user-friendly interface that meets both project requirements and user needs.'
        }, 
        { 
            question: 'What tools and software are you familiar with?',
            answer: 'I prioritize user research to gain insights into user needs, behaviors, and pain points. This informs the design decisions I make throughout the process. I conduct usability testing to gather feedback on prototypes, observing how users interact and incorporating their input to improve the design\'s usability. Additionally, I follow best practices in UX design, such as designing for accessibility and maintaining consistency across the interface.'
        },
        { 
            question: 'In your opinion, what are the key principles of effective UI/UX design? How do you ensure that your designs are both aesthetically pleasing and user-friendly?',
            answer: 'The key principles of effective UI/UX design include clarity, consistency, simplicity, and empathy for the user. To ensure designs are both aesthetically pleasing and user-friendly, I prioritize user research and testing, adhere to design principles like visual hierarchy and balance, collaborate closely with stakeholders, and iterate on designs based on feedback and data analysis. By following these strategies, I aim to create interfaces that enhance user satisfaction and engagement.'
        },

        { 
            question: 'How do you stay updated on current design trends and emerging technologies in UI/UX design?',
            answer: 'I regularly engage with design communities, attend conferences, and participate in workshops to stay informed about industry trends and emerging technologies. I follow influential designers and thought leaders on social media platforms like Twitter and LinkedIn, where I often discover new tools, techniques, and design inspiration. Additionally, I allocate time for continuous learning through online courses and reading industry publications to expand my skills and knowledge.'
        },
        { 
            question: 'What tools and software do you have experience with in UI/UX design, and how do you leverage them to optimize your design process? Additionally, could you elaborate on specific techniques or features within these tools that you find particularly valuable in enhancing the UI/UX design?',
            answer: 'Sure! I\'m experienced with Figma for UI/UX design. Figma\'s real-time collaboration feature allows me to work seamlessly with team members, making it easier to share feedback and iterate on designs together. Additionally, its prototyping capabilities enable me to create interactive prototypes to test user interactions early in the design process, ensuring that the final product meets user needs effectively.'
        },
    ]);
</script>

<style scoped lang="scss">
.container {
    padding: 24px;
    &-cards {
        width: 100%;
        > :deep(.ant-card-body) {
            border-top: 1px solid #F0F0F0;
            background-color: #F8F9FA;
        } 
    }
    .lessons {
        width: 100%;
        &-info {
            width: 100%;
            text-align: center;
            .ant-avatar {
                margin-bottom: 0.35em;
            }
            .ant-typography {
                margin-bottom: 0;
            }
        }
        .toolbar {
            @media (min-width: 576px) {
                flex-direction: row;
                .ant-input-search {
                    width: 200px;
                }
            }
        }
        .ant-table-wrapper {
            .ant-table-tbody {
                > tr.ant-table-row {
                    &:hover {
                        > td {
                            background-color: #e6f4ff;
                        }
                    }
                }
            }
        }
    }
}
</style>